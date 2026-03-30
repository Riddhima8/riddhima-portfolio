import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/15 hover:border-accent/60 transition-colors"
    >
      {theme === 'dark' ? (
        <span className="text-accent">☀︎</span>
      ) : (
        <span className="text-accent">☾</span>
      )}
    </button>
  );
}


