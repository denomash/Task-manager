import { DetailedHTMLProps, HTMLAttributes } from "react";

/**
 * Modal Properties
 */
export interface IModal
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**
   * Title of the modal
   */
  title: string;
  /**
   * Is modal open
   */
  open: boolean;
  /**
   * Closes the modal
   */
  onClose: () => void;
}
