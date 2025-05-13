import type * as React from "react";

export interface InputContainerProps
  extends React.InputHTMLAttributes<HTMLDivElement> {}

const InputContainer = ({ ...props }: InputContainerProps) => {
  const { children } = props;

  return <div className="flex flex-col gap-1">{children}</div>;
};

export { InputContainer };
