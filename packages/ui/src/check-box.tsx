import { clsxm } from "@ijancleaning/tw";

export interface CheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function CheckBox({
  className,
  readOnly = false,
  ...props
}: CheckBoxProps) {
  return (
    <input
      type="checkbox"
      className={clsxm(
        "form-checkbox",
        "bg-root dark:border-base-700 rounded dark:checked:bg-blue-500",
        className
      )}
      readOnly={readOnly}
      {...props}
    />
  );
}
