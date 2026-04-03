import { clsx } from 'clsx';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'gold';
  size?: 'sm' | 'md';
  className?: string;
}

const variants = {
  default: 'bg-gray-700 text-gray-200',
  primary: 'bg-primary/20 text-primary-300 border border-primary/30',
  success: 'bg-green-900/50 text-green-300 border border-green-700/50',
  warning: 'bg-yellow-900/50 text-yellow-300 border border-yellow-700/50',
  danger: 'bg-red-900/50 text-red-300 border border-red-700/50',
  gold: 'bg-gold/20 text-gold border border-gold/30',
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
};

export function Badge({ children, variant = 'default', size = 'sm', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center font-medium rounded-full',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
