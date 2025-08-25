

export interface IPrimaryButtonProps {
  label: string;
  func?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}