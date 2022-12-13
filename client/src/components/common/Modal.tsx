import React from "react";
import Overlay from "./Overlay";

interface IModalProps {
  children?: React.ReactNode;
  onClickOutside?: () => void;
  onClose?: () => void;
}

const Modal = (props: IModalProps) => {
  const { children, onClickOutside, onClose } = props;
  return (
    <div className="w-screen h-screen fixed z-40">
      <Overlay onClick={onClickOutside} />
      <div className="w-[90%] max-w-[872px] h-auto max-h-[90%]  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-scroll no-scrollbar bg-background-color">
        <div
          className="close__btn absolute right-4 top-4 w-9 h-9 flex items-center justify-center rounded-full bg-black opacity-50 cursor-pointer z-30"
          onClick={onClose}
        >
          <i className="bx bx-x text-white text-[32px]"></i>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
