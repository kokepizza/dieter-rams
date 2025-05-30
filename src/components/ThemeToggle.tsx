import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      metaThemeColor?.setAttribute('content', '#000000');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      metaThemeColor?.setAttribute('content', '#000000');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="w-4 h-4 rounded-full transition-colors duration-300 bg-black dark:bg-white"
      aria-label="Toggle dark mode"
    />
  );
}