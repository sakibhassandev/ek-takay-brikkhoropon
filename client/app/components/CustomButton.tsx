import React from "react";

const CustomButton = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [x: string]: unknown;
}) => (
  <button
    className={`bg-transparent border-2 border-orange-500 text-white hover:bg-orange-500 hover:text-white transition-colors px-8 py-2 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;
