export interface ICheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: (event: any) => void;
  checked: boolean;
  label: string;
}
