import styles from './Inpute.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
}
export function Input({placeholder, ...props}: InputProps) {
    return (
        <input
            type="text"
            className={styles.input}
            placeholder={placeholder}
            {...props}
        />
    
    )
}