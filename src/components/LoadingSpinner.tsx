import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  color = '#3b82f6',
  className = ''
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className={`inline-block animate-spin ${sizeClasses[size]} ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke={color}
          strokeWidth="2"
          strokeDasharray="31.416"
          strokeDashoffset="31.416"
          strokeLinecap="round"
          className="animate-spin-slow"
          style={{
            animation: 'spin-dash 2s linear infinite',
          }}
        />
      </svg>
      <style jsx>{`
        @keyframes spin-dash {
          0% {
            stroke-dashoffset: 31.416;
          }
          50% {
            stroke-dashoffset: 7.854;
          }
          100% {
            stroke-dashoffset: 31.416;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;