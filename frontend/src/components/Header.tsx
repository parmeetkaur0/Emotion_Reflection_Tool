import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="custom-header p-4 text-center">
      <h1 className="text-3xl font-bold">Emotion Reflection Tool</h1>
      <p className="text-sm mt-1">Analyze your text emotions with confidence!</p>
    </header>
  );
};

export default Header;