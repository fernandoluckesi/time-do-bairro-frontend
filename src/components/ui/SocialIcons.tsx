// lucide-react 1.x no longer ships brand icons, so these are minimal inline SVGs.
type IconProps = { size?: number };

export function FacebookIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        d="M13.4 19v-6h2l.3-2.4h-2.3V9.1c0-.7.2-1.1 1.2-1.1h1.2V5.9c-.2 0-1-.1-1.8-.1-1.8 0-3 1.1-3 3.1v1.7h-2V13h2v6h2.4z"
        fill="#fff"
      />
    </svg>
  );
}

export function InstagramIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="ig" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#FEDA75" />
          <stop offset="0.5" stopColor="#D62976" />
          <stop offset="1" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="url(#ig)" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.6" fill="none" stroke="url(#ig)" strokeWidth="2" />
      <circle cx="16.6" cy="7.4" r="1.1" fill="#D62976" />
    </svg>
  );
}

export function WhatsappIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#25D366" />
      <path
        d="M12 5.6a6.3 6.3 0 0 0-5.4 9.6l-.8 3 3.1-.8A6.3 6.3 0 1 0 12 5.6zm3.6 8.9c-.2.4-.9.8-1.3.8-.3 0-.7.1-2.3-.6-2-.8-3.2-2.8-3.3-3s-.8-1-.8-2 .5-1.4.7-1.6.4-.2.5-.2h.4c.1 0 .3 0 .4.3l.6 1.4c0 .1.1.3 0 .4l-.2.4-.3.3c-.1.1-.2.2-.1.4.1.2.5.9 1.1 1.4.8.7 1.4.9 1.6 1 .2.1.3.1.4-.1l.6-.7c.1-.2.3-.2.4-.1l1.3.6c.2.1.3.1.4.2 0 .1 0 .6-.1 1z"
        fill="#fff"
      />
    </svg>
  );
}
