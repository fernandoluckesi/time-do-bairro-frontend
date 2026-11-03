export const theme = {
  colors: {
    primary: '#FF5A00',
    primaryDark: '#E04E00',
    primarySoft: '#FFF1EA',
    black: '#0A0A0A',
    text: '#1A1310',
    textMuted: '#5F5753',
    border: '#EFEAE6',
    background: '#FFFFFF',
    beige: '#F7F3EF',
    yellow: '#FFC527',
    green: '#7CC520',
    teal: '#22B07D',
    white: '#FFFFFF',
  },
  fonts: {
    body: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
  },
  radius: {
    sm: '12px',
    md: '20px',
    lg: '32px',
    pill: '999px',
  },
  container: '1140px',
  breakpoints: {
    md: '960px',
    sm: '640px',
  },
} as const;

export type AppTheme = typeof theme;
