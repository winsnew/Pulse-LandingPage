import React, { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  disabled: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  type = 'button',
  variant = 'primary',
  className = '',
  onClick,
  disabled = false
}) => {
  const baseStyles = "relative overflow-hidden px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent text-sm";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 focus:ring-blue-400 shadow-lg shadow-blue-500/20",
    secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/15 focus:ring-white/50 backdrop-blur-sm"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className} group`}
    >
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        {!disabled && [...Array(4)].map((_, i) => ( // ✅ Hide animation when disabled
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/40 rounded-full"
            style={{
              left: `${25 + (i * 15)}%`,
              bottom: '-4px',
              animation: `floatingDots 1.8s infinite ${i * 0.3}s ease-in-out`
            }}
          />
        ))}
      </div>
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>

      {/* Hover effect overlay */}
      {!disabled && ( // ✅ Hide hover effect when disabled
        <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      )}
    </button>
  );
};

export default AnimatedButton;