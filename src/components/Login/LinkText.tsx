import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface LinkTextProps {
  className?: string;
  onClick?: () => void;
}

const LinkText: React.FC<LinkTextProps> = ({ className, onClick }) => {
  const handleLinkClick = React.useCallback(() => {
    if (onClick) {
      onClick();
    }
    // Example: console.log("Sign up link clicked");
  }, [onClick]);

  return (
    <div className={cn("text-center mt-4", className)}>
      <Button
        variant="link"
        className="text-sm text-muted-foreground p-0 h-auto font-normal hover:text-primary focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-1"
        onClick={handleLinkClick}
      >
        or, sign up
      </Button>
    </div>
  );
};

export default LinkText;
