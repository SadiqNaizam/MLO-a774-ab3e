import React from 'react';
import { cn } from '@/lib/utils';
import LoginHeading from './LoginHeading';
import InputFields from './InputFields';
import ActionButton from './ActionButton';
import LinkText from './LinkText';

interface LoginCardProps {
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  const handleLoginSubmit = () => {
    // In a real application, form data would be accessed here (e.g., from react-hook-form)
    // and an API call would be made.
    // For this example, ActionButton's onClick logs to console.
    // InputFields manages its own state for username/password.
    console.log('Login form submitted via LoginCard');
  };

  const handleSignUpNavigation = () => {
    // Placeholder for navigation logic to sign-up page
    console.log('Navigate to sign up page');
  };

  return (
    <div
      className={cn(
        "flex flex-col w-[320px] p-6 bg-card text-card-foreground rounded-md shadow-md",
        className
      )}
    >
      <LoginHeading />
      {/* Using a form tag for semantic correctness and accessibility */}
      <form onSubmit={(e) => { e.preventDefault(); handleLoginSubmit(); }}>
        <InputFields />
        {/* ActionButton type defaults to "submit" when inside a form */}
        <ActionButton /> 
      </form>
      <LinkText onClick={handleSignUpNavigation} />
    </div>
  );
};

export default LoginCard;
