import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-medium transition-all duration-200 text-sm tracking-wide uppercase focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-salon-black text-white hover:bg-neutral-800 focus:ring-neutral-900 shadow-md",
    secondary: "bg-gold-500 text-white hover:bg-gold-600 focus:ring-gold-500 shadow-md",
    outline: "border-2 border-salon-black text-salon-black hover:bg-salon-black hover:text-white",
    text: "text-salon-black hover:text-gold-600 underline-offset-4 hover:underline px-0 py-1"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;