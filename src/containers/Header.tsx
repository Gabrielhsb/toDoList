
import style from './Header.module.css';
export function Header() {
    return (
            <header className={style.headerContainer}>
                <img src="./src/assets/logo-todo.svg" alt="logo" />
            </header>
    )
}