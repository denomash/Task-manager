import classNames from "classnames";
import { IButton } from "../../models/common/IButton";

/**
 * Component which displays a button.
 * @param props Button Properties.
 * @param props.className Button classname.
 * @param props.type Button type.
 * @param props.display Button display.
 * @param props.compact Button compact.
 * @param props.children Button children.
 * @returns The node to render.
 */
const Button = ({
  className,
  type,
  display,
  compact,
  children,
  ...props
}: IButton) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type ?? "button"}
    {...props}
    className={classNames(
      "text-white text-sm bg-blue-600 hover:bg-blue-800 font-medium rounded-lg px-5 py-2.5 m-1",
      className,
      {
        "dark:bg-gray-700 dark:hover:bg-gray-600": display === "secondary",
        "dark:bg-red-600 dark:hover:bg-red-700": display === "danger",
      }
    )}
  >
    {children}
  </button>
);

export default Button;
