export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  buttonType?: 'primary' | 'secondary';
  loading?: boolean;
}
