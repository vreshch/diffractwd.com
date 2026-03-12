import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';
import { IconContainer } from '@/components/icon-container';

const styles = {
  sm: { margin: 'mb-4', heading: 'text-lg font-semibold' },
  md: { margin: 'mb-4', heading: 'text-xl font-bold' },
  lg: { margin: 'mb-8', heading: 'text-2xl font-bold tracking-tight' },
} as const;

type SectionHeaderProps = {
  icon: ReactNode;
  title: string;
  size?: keyof typeof styles;
};

export function SectionHeader({ icon, title, size = 'lg' }: SectionHeaderProps) {
  const { margin, heading } = styles[size];
  return (
    <div className={cn(margin, 'flex items-center gap-3')}>
      <IconContainer>{icon}</IconContainer>
      <h2 className={cn(heading, 'text-heading dark:text-dark-text')}>{title}</h2>
    </div>
  );
}
