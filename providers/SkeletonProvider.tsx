'use client';

import { useTheme } from 'next-themes';
import { SkeletonTheme } from 'react-loading-skeleton';
import { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SkeletonProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>(theme);

  useEffect(() => {
    if (theme === 'system') {
      setCurrentTheme(systemTheme);
    } else {
      setCurrentTheme(theme);
    }
  }, [theme, systemTheme]);
  console.log('THEME', theme);
  console.log('CURRENT', theme)

  return (
    <SkeletonTheme
      baseColor={currentTheme === 'dark' ? '#202020' : '#e0e0e0'}
      highlightColor={currentTheme === 'dark' ? '##444' : '#f5f5f5'}
    >
      {children}
    </SkeletonTheme>
  );
}
