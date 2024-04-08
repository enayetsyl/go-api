import React, { ReactNode } from 'react';

type Props = {
  className?: string;
  children: ReactNode;
}

const Button = ({ className, children }: Props) => {
  return (
    <button className={className}>{children}</button>
  );
}

export default Button;
