import { IModal } from "../../models/Modal/Modal";

/**
 * Modal Footer
 * @returns The node to render.
 */
export const ModalFooter = ({ children }: { children: IModal["children"] }) => (
  <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
    {children}
  </div>
);
