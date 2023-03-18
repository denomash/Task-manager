import { FC } from "react";
import { IModal } from "../../models/Modal/Modal";
import { ModalHeader } from "./ModalHeader";

export const Modal: FC<IModal> = ({
  title,
  open,
  children,
  onClose,
}: IModal) => {
  if (!open) return <></>;

  return (
    <div className="backdrop-blur-sm fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
      <div className="flex justify-center items-center h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow drop-shadow-xl w-2/6">
          {/* Modal header */}
          <ModalHeader title={title} onClose={onClose} />
          {/* Modal body */}
          {children}
        </div>
      </div>
    </div>
  );
};
