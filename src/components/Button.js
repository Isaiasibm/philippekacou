// components/Button.js
import { cn } from "class-variance-authority";

export const Button = ({ className, children, ...props }) => (
  <button
    className={cn(
      "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
      className
    )}
    {...props}
  >
    {children}
  </button>
);
