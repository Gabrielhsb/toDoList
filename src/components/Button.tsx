import {  PlusCircle } from '@phosphor-icons/react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    onClick?: () => void
}
export function Button({text, onClick, ...props}: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.buttonWrapper} {...props}>
        {text}
        <PlusCircle size={20} />

    </button>
  );
}
