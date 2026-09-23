type Theme = Record<string, any>;

const injectGoogleFont = (family: string, id: string) => {
  if (typeof document === 'undefined') return;
  const cleanFamily = family.split(',')[0].trim().replace(/['"]/g, '');
  if (!cleanFamily) return;

  const href = `https://fonts.googleapis.com/css2?family=${cleanFamily.replace(/ /g, '+')}:wght@300;400;500;600;700;800&display=swap`;
  const existingLink = document.getElementById(id) as HTMLLinkElement | null;
  if (existingLink) {
    existingLink.href = href;
    return;
  }

  const link = document.createElement('link');
  link.id = id;
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
};

export function applyTheme(theme: Theme | null | undefined) {
  if (typeof document === 'undefined' || !theme) return;

  const root = document.documentElement;
  const colors = theme.colors || {};
  const coreColors = colors.core || colors;
  const typography = theme.typography || {};
  const text = typography.text || {};
  const fw = typography.fw || {};
  const lineHeight = typography.lineHeight || {};
  const spacing = theme.spacing || {};
  const radius = theme.radius || {};
  const shadow = theme.shadow || {};
  const layout = theme.layout || {};
  const buttons = { ...(theme.buttons || {}), ...(colors.buttons || {}) };
  const forms = { ...(theme.forms || {}), ...(colors.forms || {}) };

  const cssVars: Record<string, string | number | undefined> = {
    '--background': coreColors.background,
    '--foreground': coreColors.text,
    '--surface': coreColors.surface,
    '--surface-muted': colors.surfaceMuted,
    '--muted': colors.textSecondary,
    '--border': colors.border,
    '--primary': coreColors.primary,
    '--primary-light': colors.primaryLight,
    '--primary-dark': colors.primaryDark,
    '--primary-hover': colors.primaryHover,
    '--primary-soft': colors.primarySoft,
    '--accent': coreColors.accent,
    '--accent-foreground': colors.accentForeground,
    '--card': colors.card || coreColors.surface,
    '--card-foreground': coreColors.text,
    '--popover': colors.popover || coreColors.surface,
    '--popover-foreground': coreColors.text,
    '--primary-foreground': colors.primaryForeground || buttons.primaryText,
    '--secondary': coreColors.secondary,
    '--secondary-foreground': colors.secondaryForeground,
    '--muted-foreground': colors.textMuted,
    '--destructive': colors.danger || colors.error,
    '--input': forms.inputBorder,
    '--ring': forms.inputFocusBorder || coreColors.primary,
    '--app-selection-bg': colors.selectionBackground,
    '--app-selection-fg': colors.selectionText,
    '--app-container-width': layout.container,
    '--app-admin-bg': colors.adminBackground,
    '--app-admin-accent': colors.adminAccent || coreColors.primary,
    '--font-body': typography.bodyFont,
    '--font-heading': typography.headingFont,
    '--app-font-body': typography.bodyFont,
    '--app-font-title': typography.headingFont,
    '--text-xs': text.xs,
    '--text-sm': text.sm,
    '--text-base': text.base,
    '--text-md': text.md,
    '--text-lg': text.lg,
    '--text-xl': text.xl,
    '--text-2xl': text['2xl'],
    '--text-3xl': text['3xl'],
    '--text-4xl': text['4xl'],
    '--text-5xl': text['5xl'],
    '--text-h1': text.h1,
    '--text-h2': text.h2,
    '--text-h3': text.h3,
    '--fw-light': fw.light,
    '--fw-normal': fw.normal,
    '--fw-medium': fw.medium,
    '--fw-semibold': fw.semibold,
    '--fw-bold': fw.bold,
    '--leading-tight': lineHeight.tight,
    '--leading-normal': lineHeight.normal,
    '--leading-relaxed': lineHeight.relaxed,
    '--space-1': spacing['1'],
    '--space-2': spacing['2'],
    '--space-3': spacing['3'],
    '--space-4': spacing['4'],
    '--space-5': spacing['5'],
    '--space-6': spacing['6'],
    '--space-8': spacing['8'],
    '--space-10': spacing['10'],
    '--space-12': spacing['12'],
    '--space-16': spacing['16'],
    '--space-20': spacing['20'],
    '--space-24': spacing['24'],
    '--radius-sm': radius.sm,
    '--radius-md': radius.md,
    '--radius-lg': radius.lg,
    '--radius-xl': radius.xl,
    '--radius-2xl': radius['2xl'],
    '--radius-full': radius.full,
    '--shadow-sm': shadow.sm,
    '--shadow-md': shadow.md,
    '--shadow-lg': shadow.lg,
    '--shadow-hover': shadow.hover,
    '--btn-height': buttons.height,
    '--btn-padding-x': buttons.paddingX,
    '--btn-radius': buttons.radius,
    '--btn-primary-bg': buttons.primaryBackground || coreColors.primary,
    '--btn-primary-text': buttons.primaryText,
    '--btn-primary-hover': buttons.primaryHover || colors.primaryHover,
    '--input-height': forms.inputHeight,
    '--input-bg': forms.inputBackground,
    '--input-text': forms.inputText,
    '--input-border': forms.inputBorder,
    '--input-focus-border': forms.inputFocusBorder,
    '--input-focus-shadow': forms.inputFocusShadow,
  };

  Object.entries(cssVars).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      root.style.setProperty(key, String(value));
    }
  });

  if (typography.bodyFont) injectGoogleFont(typography.bodyFont, 'vivivita-body-font');
  if (typography.headingFont) injectGoogleFont(typography.headingFont, 'vivivita-heading-font');
}
