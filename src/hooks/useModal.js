import { useState } from "react";

export const useModal = () => {
  const [show, setShow] = useState(false);
  return { show, toogle: () => setShow(!show) };
};
