import { cva, type VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

const iconContainerVariants = cva(
  'inline-flex items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light',
  {
    variants: {
      size: {
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-12 w-12',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

type IconContainerProps = VariantProps<typeof iconContainerVariants> & {
  children: ReactNode;
  className?: string;
};

export function IconContainer({ children, className, size }: IconContainerProps) {
  return <div className={cn(iconContainerVariants({ size }), className)}>{children}</div>;
}
