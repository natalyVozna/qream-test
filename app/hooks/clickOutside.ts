import React, { useEffect } from "react";

interface IUseClickOutsideProps {
  ref: React.RefObject<HTMLElement>;
  btnRef: React.RefObject<HTMLElement>;
  callback: () => void;
}

export const useClickOutside = ({
  ref,
  callback,
  btnRef,
}: IUseClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node) &&
        e.target !== btnRef.current
      ) {
        console.log("click outside");
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, btnRef]);
};
