import React, { forwardRef } from "react";

export const Input = forwardRef(({ id, ...props }, ref) => (
  <input
    className="outline-none  border  border-spacing-2 p-2 border-gray-400 rounded-lg w-full"
    id={id}
    ref={ref}
    {...props}
  />
));
