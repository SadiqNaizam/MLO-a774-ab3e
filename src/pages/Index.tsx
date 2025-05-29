import React from 'react';
import AuthLayout from '@/components/layout/AuthLayout';
import LoginCard from '@/components/Login/LoginCard';

/**
 * LoginPage serves as the main entry point for the login interface.
 * It utilizes AuthLayout to provide a consistent centered layout and
 * renders the LoginCard component which contains all the login form elements.
 */
const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <LoginCard />
    </AuthLayout>
  );
};

export default LoginPage;
