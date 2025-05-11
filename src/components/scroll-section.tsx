// src/components/scroll-section.tsx
'use client';

import { forwardRef, HTMLAttributes } from 'react';

type ScrollSectionProps = HTMLAttributes<HTMLDivElement> & {
  // You can add any custom props here if needed
};

export const ScrollSection = forwardRef<HTMLDivElement, ScrollSectionProps>(
  ({ id, className = '', children, ...props }, ref) => (
    <div 
      ref={ref}
      id={id}
      className={`scroll-mt-20 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);
ScrollSection.displayName = 'ScrollSection';