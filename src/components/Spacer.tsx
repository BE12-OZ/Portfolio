// src/components/Spacer.tsx
import React from 'react';

interface SpacerProps {
  heightClass?: string; // e.g., "h-32", "h-64"
}

const Spacer: React.FC<SpacerProps> = ({ heightClass = "h-32" }) => {
  return (
    <div className={heightClass}></div>
  );
};

export default Spacer;
