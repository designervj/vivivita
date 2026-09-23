"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Database, Edit3, Eye, EyeOff, LayoutDashboard, LogOut, MessageSquare, Sparkles } from 'lucide-react';
import { logout } from '../../app/actions/auth';

const tenantDb = process.env.NEXT_PUBLIC_TENANT_DB || 'kp_vivivita';
const adminUrl = process.env.NEXT_PUBLIC_KALP_ADMIN_URL || 'https://zero.kalptree.xyz';

export default function AdminBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isCommentMode, setIsCommentMode] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.adminEditMode = String(isEditMode);
    document.documentElement.dataset.adminCommentMode = String(isCommentMode);
  }, [isEditMode, isCommentMode]);

  const toggleEditMode = () => {
    setIsCommentMode(false);
    setIsEditMode((current) => !current);
  };

  const toggleCommentMode = () => {
    setIsEditMode(false);
    setIsCommentMode((current) => !current);
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        style={{ backgroundColor: '#1c1917' }}
        className="fixed top-3 right-3 z-[10000] flex h-8 items-center gap-2 rounded-full border border-white/20 px-4 text-[11px] font-semibold text-white/80 shadow-lg shadow-black/40 transition-all duration-200 hover:scale-105 hover:text-white"
        title="Show Admin Bar"
      >
        <Eye className="h-3.5 w-3.5 text-[var(--app-admin-accent)]" />
        <span>Show Admin Bar</span>
      </button>
    );
  }

  return (
    <div
      data-annotator-ui="true"
      style={{ backgroundColor: '#1c1917' }}
      className="relative z-[9999] w-full select-none border-b border-white/10 font-sans text-[13px] text-white"
    >
      <div
        className="flex h-11 w-full items-center justify-between gap-4 overflow-x-auto whitespace-nowrap px-2 sm:px-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{ __html: '.admin-bar-scroll::-webkit-scrollbar{display:none}' }} />

        <div className="admin-bar-scroll flex shrink-0 items-center gap-3">
          <Link
            href={adminUrl}
            target="_blank"
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white/80 transition-colors duration-200 hover:text-white"
          >
            <LayoutDashboard className="h-3.5 w-3.5 shrink-0 text-[var(--app-admin-accent)]" />
            <span className="hidden sm:inline">Admin Dashboard</span>
            <span className="sm:hidden">Admin</span>
          </Link>

          {/* <Link
            href="/studio"
            className="flex items-center gap-1.5 rounded-full bg-[var(--app-admin-accent)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm transition-opacity hover:opacity-90"
          >
            <Sparkles className="h-3 w-3" />
            <span>Studio</span>
          </Link> */}

          {/* <span className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--app-admin-accent)]" style={{ backgroundColor: 'color-mix(in srgb, var(--app-admin-accent) 15%, transparent)' }}>
            <span className="inline-flex items-center gap-1.5"><Database className="h-3 w-3" /> {tenantDb}</span>
          </span> */}
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            onClick={toggleCommentMode}
            style={
              isCommentMode
                ? { borderColor: 'var(--app-admin-accent)', color: 'var(--app-admin-accent)', backgroundColor: 'color-mix(in srgb, var(--app-admin-accent) 12%, transparent)' }
                : { borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)', backgroundColor: 'rgba(255,255,255,0.05)' }
            }
            className="flex h-7 shrink-0 items-center gap-1.5 rounded-full border px-2 text-[11px] font-semibold transition-all hover:opacity-90 sm:gap-2 sm:px-3"
            title="Toggle local comment mode"
          >
            <MessageSquare className="h-3.5 w-3.5 shrink-0" />
            <span className="hidden md:inline">{isCommentMode ? 'Hide Comments' : 'Show Comments (0)'}</span>
            <span className="md:hidden">0</span>
          </button>

          <button
            onClick={toggleEditMode}
            style={
              isEditMode
                ? { backgroundColor: 'var(--app-admin-accent)', borderColor: 'var(--app-admin-accent)', color: '#FFFFFF', boxShadow: '0 0 12px color-mix(in srgb, var(--app-admin-accent) 45%, transparent)' }
                : { borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)', backgroundColor: 'rgba(255,255,255,0.05)' }
            }
            className="flex h-7 shrink-0 items-center gap-1.5 rounded-full border px-2 text-[11px] font-semibold transition-all hover:opacity-90 sm:px-3"
            title={isEditMode ? 'Disable edit mode' : 'Enable edit mode'}
          >
            <Edit3 className="h-3.5 w-3.5 shrink-0" />
            <span className="hidden md:inline">Edit Mode {isEditMode ? 'ON' : 'OFF'}</span>
            <span className="md:hidden">{isEditMode ? 'ON' : 'OFF'}</span>
          </button>

          <span className="select-none text-white/20">|</span>

          <button
            onClick={() => setIsVisible(false)}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-transparent text-white/70 transition-all hover:bg-white/15 hover:text-white"
            title="Hide Admin Bar"
          >
            <EyeOff className="h-3.5 w-3.5" />
          </button>

          <button
            onClick={() => logout()}
            className="flex h-7 shrink-0 items-center gap-1.5 rounded-full border border-red-500/40 bg-red-500/10 px-2 text-[11px] font-semibold text-red-400 transition-all hover:bg-red-500/20 hover:text-red-300 sm:px-3"
            title="Logout"
          >
            <LogOut className="h-3.5 w-3.5 shrink-0" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>

      {(isEditMode || isCommentMode) && (
        <div className="w-full border-t border-white/10 bg-[var(--app-admin-accent)] py-2 text-center text-[12px] font-semibold text-white">
          {isEditMode ? 'Inline edit mode is active. CMS API saves to MongoDB tenant kp_vivivita.' : 'Comment mode is active. Kalp admin tenant is kp_vivivita.'}
        </div>
      )}
    </div>
  );
}
