import React from 'react';
import { cn } from '@/lib/utils';

interface LoginHeadingProps {
  className?: string;
}

const LoginHeading: React.FC<LoginHeadingProps> = ({ className }) => {
  return (
    <h1 className={cn("text-3xl font-bold text-card-foreground mb-6 text-center", className)}>
      Log in
    </h1>
  );
};

export default LoginHeading;
