import React, { forwardRef } from "react";

export const CheckBox = forwardRef(({ value, ...props }, ref) => (
  <input
    type="checkbox"
    id={value}
    name={value}
    value={value}
    ref={ref}
    {...props}
  />
));
