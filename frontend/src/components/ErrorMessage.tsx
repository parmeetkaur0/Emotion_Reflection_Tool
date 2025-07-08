import React from 'react';

interface ErrorMessageProps {
  error: string | null;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  if (!error) return null;

  return (
    <p className="text-red-500 text-center mt-2 bg-red-50 p-3 rounded-md max-w-2xl mx-auto">{error}</p>
  );
};

export default ErrorMessage;