"use client";

import { KeyboardEvent, type ElementType, useEffect, useRef, useState } from 'react';

interface EditableTextProps {
  value: string;
  sectionId: string;
  fieldPath: string;
  pageSlug?: string;
  tag?: ElementType;
  className?: string;
  placeholder?: string;
  multiline?: boolean;
  isEditable?: boolean;
  onSave?: (value: string) => Promise<void> | void;
}

const getEditModeFromDom = () => {
  if (typeof document === 'undefined') return false;
  return document.documentElement.dataset.adminEditMode === 'true';
};

const isNumericPathPart = (part: string) => /^\d+$/.test(part);
const pageCache = new Map<string, Promise<any>>();

const getNestedValue = (target: any, path: string) => {
  return path.split('.').filter(Boolean).reduce((current, part) => current?.[part], target);
};

const setNestedValue = (target: any, path: string, value: string) => {
  const parts = path.split('.').filter(Boolean);
  let current = target;

  for (let index = 0; index < parts.length - 1; index += 1) {
    const part = parts[index];
    const nextPart = parts[index + 1];

    if (current[part] === undefined || current[part] === null) {
      current[part] = isNumericPathPart(nextPart) ? [] : {};
    }

    current = current[part];
  }

  current[parts[parts.length - 1]] = value;
};

async function saveCmsField(pageSlug: string, sectionId: string, fieldPath: string, value: string) {
  const sourcePage = await loadCmsPage(pageSlug, true);
  if (!sourcePage) throw new Error(`CMS page not found: ${pageSlug}`);

  const page = JSON.parse(JSON.stringify(sourcePage));
  const section = page.content?.find((item: any) => item.id === sectionId);
  if (!section?.props) throw new Error(`CMS section not found: ${sectionId}`);

  setNestedValue(section.props, fieldPath, value);

  const saveResponse = await fetch(`/api/cms/pages/${pageSlug}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(page),
  });

  if (!saveResponse.ok) {
    throw new Error(`Unable to save CMS page: ${await saveResponse.text()}`);
  }
  pageCache.delete(pageSlug);
}

async function loadCmsPage(pageSlug: string, force = false) {
  if (force) pageCache.delete(pageSlug);

  if (!pageCache.has(pageSlug)) {
    pageCache.set(pageSlug, fetch('/api/cms/pages', { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) throw new Error('Unable to load CMS pages');
        return response.json();
      })
      .then((payload) => payload?.data?.[pageSlug]));
  }

  return pageCache.get(pageSlug);
}

export default function EditableText({
  value,
  sectionId,
  fieldPath,
  pageSlug = 'home',
  tag: Tag = 'span',
  className = '',
  placeholder = 'Click to edit...',
  multiline = false,
  isEditable: isEditableProp,
  onSave,
}: EditableTextProps) {
  const [isAdminEditMode, setIsAdminEditMode] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [currentValue, setCurrentValue] = useState(value);
  const elementRef = useRef<HTMLElement>(null);
  const lastSavedValueRef = useRef(value);

  const isInsideStudio = typeof window !== 'undefined' && (
    window.location.search.includes('studio_preview=true') || window.parent !== window
  );
  const isEditable = isEditableProp ?? (isAdminEditMode || isInsideStudio);

  useEffect(() => {
    setIsAdminEditMode(getEditModeFromDom());

    const observer = new MutationObserver(() => {
      setIsAdminEditMode(getEditModeFromDom());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-admin-edit-mode'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    lastSavedValueRef.current = value;
    setCurrentValue(value);
  }, [value]);

  useEffect(() => {
    let isCancelled = false;

    loadCmsPage(pageSlug)
      .then((page) => {
        if (isCancelled) return;

        const section = page?.content?.find((item: any) => item.id === sectionId);
        const cmsValue = getNestedValue(section?.props, fieldPath);

        if (typeof cmsValue === 'string' && cmsValue !== lastSavedValueRef.current) {
          lastSavedValueRef.current = cmsValue;
          setCurrentValue(cmsValue);
        }
      })
      .catch((error) => console.error('Failed to load inline edit value:', error));

    return () => {
      isCancelled = true;
    };
  }, [fieldPath, pageSlug, sectionId]);

  const handleFocus = () => {
    if (!isEditable) return;
    setIsFocused(true);

    if (elementRef.current?.innerText === placeholder) {
      elementRef.current.innerText = '';
    }
  };

  const handleBlur = async () => {
    setIsFocused(false);
    if (!elementRef.current) return;

    const nextValue = elementRef.current.innerText.trim();
    if (!nextValue) {
      elementRef.current.innerText = placeholder;
      return;
    }

    if (nextValue === lastSavedValueRef.current || nextValue === placeholder) return;

    const previousValue = lastSavedValueRef.current;
    setCurrentValue(nextValue);
    setSaveStatus('saving');

    try {
      if (onSave) {
        await onSave(nextValue);
      } else {
        await saveCmsField(pageSlug, sectionId, fieldPath, nextValue);
      }

      lastSavedValueRef.current = nextValue;
      setSaveStatus('saved');

      window.parent?.postMessage?.({
        type: 'STUDIO_PROP_UPDATED',
        sectionId,
        fieldPath,
        value: nextValue,
      }, '*');
    } catch (error) {
      lastSavedValueRef.current = previousValue;
      setCurrentValue(previousValue);
      if (elementRef.current) elementRef.current.innerText = previousValue;
      setSaveStatus('error');
      console.error('Failed to save inline edit:', error);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!multiline && event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      elementRef.current?.blur();
    }

    if (event.key === 'Escape') {
      if (elementRef.current) elementRef.current.innerText = lastSavedValueRef.current || placeholder;
      elementRef.current?.blur();
    }
  };

  return (
    <Tag
      ref={elementRef}
      contentEditable={isEditable}
      suppressContentEditableWarning
      data-save-status={saveStatus}
      title={saveStatus === 'error' ? 'Save failed. Check console/API.' : undefined}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={(event: MouseEvent) => {
        if (isEditable) event.stopPropagation();
      }}
      onKeyDown={handleKeyDown}
      className={`${className} ${
        isEditable
          ? 'outline-none cursor-text transition-all duration-150 hover:outline-dashed hover:outline-1 hover:outline-[var(--app-admin-accent)]/70 hover:outline-offset-2 focus:outline-solid focus:outline-2 focus:outline-[var(--app-admin-accent)] focus:outline-offset-2 focus:ring-4 focus:ring-[var(--app-admin-accent)]/20 rounded-sm'
          : ''
      }`}
    >
      {currentValue || (isEditable ? placeholder : '')}
    </Tag>
  );
}
