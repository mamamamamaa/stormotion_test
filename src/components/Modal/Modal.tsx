import { FC, MouseEventHandler, ReactNode, useEffect } from "react";
import style from "./Modal.module.css";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
  handleCloseModal: () => void;
}

export const Modal: FC<Props> = ({ children, handleCloseModal }) => {
  const modalRoot = document.querySelector("#modal-root") as Element;
  const onBackdropClose: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.currentTarget === event.target) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const onEscapeClose = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", onEscapeClose);

    return () => window.removeEventListener("keydown", onEscapeClose);
  }, [handleCloseModal]);

  return createPortal(
    <div className={style.backdrop} onClick={onBackdropClose}>
      <div className={style.window}>{children}</div>
    </div>,
    modalRoot
  );
};
