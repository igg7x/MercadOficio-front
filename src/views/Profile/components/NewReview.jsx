import React, { useState, useRef, useCallback, useLayoutEffect } from "react";
import Plus from "../../../assets/icons/Plus";

function updateTextAreaHeight(textArea) {
  if (textArea == null) return;
  textArea.style.height = "0";
  textArea.style.height = `${textArea.scrollHeight}px`;
}
const NewReview = () => {
  const [inputValue, setInputValue] = useState("");
  const textAreaRef = useRef();
  const inputRef = useCallback((textArea) => {
    updateTextAreaHeight(textArea);
    textAreaRef.current = textArea;
  }, []);

  useLayoutEffect(() => {
    updateTextAreaHeight(textAreaRef.current);
  }, [inputValue]);

  return (
    <form className="flex  flex-col gap-1   border-b px-2 py-2 ">
      <div className="flex items-center gap-1">
        <img
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="profile image"
          className="rounded-full w-12 h-12"
        />
        <textarea
          ref={inputRef}
          style={{ height: 0 }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe una reseña"
          className="flex-grow resize-none overflow-hidden max-w-[600px] p-4 text-lg outline-none"
        />
      </div>
      <button
        className="p-3 flex text-center  hover:bg-blue-600  items-center gap-1 font-semibold bg-gray-400 text-white 
      disabled:opacity-50 transition-colors duration-200 disabled:cursor-not-allowed self-end  max-[640px]:text-sm max-[640px]:p-2
      rounded-full">
        <Plus />
        Añadir Reseña
      </button>
    </form>
  );
};

export default NewReview;
