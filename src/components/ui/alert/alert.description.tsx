import * as React from "react";
import { cn } from "@/lib/utils";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "self-stretch justify-start text-content-neutral-500 text-sm font-normal leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));

export { AlertDescription };
