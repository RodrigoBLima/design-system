import * as React from "react";
import { cn } from "@/lib/utils";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "self-stretch justify-start text-content-neutral-500 text-base font-semibold leading-tight tracking-tight",
      className,
    )}
    {...props}
  />
));

export { AlertTitle };
