import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputFieldsProps {
  className?: string;
  // In a real app, value and onChange for inputs would likely be passed as props
  // or managed by a form library context.
}

const InputFields: React.FC<InputFieldsProps> = ({ className }) => {
  // Basic state for input values. For complex forms, consider react-hook-form.
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  return (
    <div className={cn("space-y-4", className)}>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="username" className="text-sm font-medium text-card-foreground">
          Username
        </Label>
        <Input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="placeholder:text-muted-foreground"
          autoComplete='username'
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password" className="text-sm font-medium text-card-foreground">
          Password
        </Label>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="placeholder:text-muted-foreground"
          autoComplete='current-password'
        />
      </div>
    </div>
  );
};

export default InputFields;
