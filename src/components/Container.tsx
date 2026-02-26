import React, { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string; 
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={clsx(
      "w-full max-w-full px-6 lg:px-8", 
      className                         
    )}>
      {children}
    </div>
  );
}