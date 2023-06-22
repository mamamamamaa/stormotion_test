import { FC, MouseEventHandler, ReactNode, useEffect } from "react";
import style from "./Modal.module.css";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

export const Modal: FC<Props> = ({ children, onClose }) => {
  const modalRoot = document.querySelector("#modal-root") as Element;
  const onBackdropClose: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const onEscapeClose = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEscapeClose);

    return () => window.removeEventListener("keydown", onEscapeClose);
  }, [onClose]);

  return createPortal(
    <div className={style.backdrop} onClick={onBackdropClose}>
      <div className={style.window}>{children}</div>
    </div>,
    modalRoot
  );
};
