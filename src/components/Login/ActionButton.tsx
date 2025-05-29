import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ActionButtonProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // More specific event type
  // type="submit" is implicit if not specified and button is in a form
}

const ActionButton: React.FC<ActionButtonProps> = ({ className, onClick }) => {
  // onClick prop is optional; if provided, it will be called.
  // If this button is inside a <form> element, it will default to type="submit"
  // and trigger the form's onSubmit handler.
  const handleClick = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
    // If not part of a form or specific onClick logic is needed independent of form submission:
    // console.log("Log in button clicked via ActionButton's own handler");
  }, [onClick]);

  return (
    <Button
      variant="default" // Uses primary color defined in theme
      type="submit" // Explicitly set type for clarity within a form context
      className={cn("w-full h-10 text-base font-medium mt-6", className)}
      onClick={onClick ? handleClick : undefined} // Only attach if onClick is provided to avoid overriding form submission
    >
      Log in
    </Button>
  );
};

export default ActionButton;
