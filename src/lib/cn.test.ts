import { describe, it, expect } from 'vitest';
import { cn } from './cn';

describe('cn', () => {
  it('merges class names correctly', () => {
    const result = cn('px-4', 'py-2');
    expect(result).toBe('px-4 py-2');
  });

  it('handles conditional classes', () => {
    const isActive = true;
    const result = cn('base', isActive && 'active');
    expect(result).toContain('base');
    expect(result).toContain('active');
  });

  it('excludes falsy values', () => {
    const result = cn('base', false, null, undefined, 'visible');
    expect(result).toBe('base visible');
  });

  it('resolves tailwind conflicts by keeping the last class', () => {
    const result = cn('px-4', 'px-8');
    expect(result).toBe('px-8');
  });

  it('handles empty inputs', () => {
    const result = cn();
    expect(result).toBe('');
  });

  it('handles array inputs', () => {
    const result = cn(['px-4', 'py-2']);
    expect(result).toBe('px-4 py-2');
  });

  it('merges complex tailwind class conflicts', () => {
    const result = cn(
      'block border-l-3 px-4 py-2 text-primary',
      'border-l-white hover:border-l-sidebar-border'
    );
    expect(result).toContain('block');
    expect(result).toContain('text-primary');
  });
});
