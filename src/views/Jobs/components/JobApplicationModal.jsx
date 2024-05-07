import React from "react";
import Button from "@components/Button";
import MarkIcon from "@assets/icons/MarkIcon";
const JobApplicationModal = ({ show, children }) => {
  return show ? (
    <section className="fixed top-0 z-10  left-0  w-full h-full  flex items-center justify-center backdrop-brightness-50">
      {children}
    </section>
  ) : null;
};

export default JobApplicationModal;
