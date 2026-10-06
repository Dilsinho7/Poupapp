import styles from './aside.module.css'
import logo from '../../assets/logo.svg'

export const Aside = () => {
    return (
        <aside className={styles.aside}>
            <img src={logo} alt="" />
            <footer className={styles.footer}>
                Projeto fictício sem fins comerciais.
            </footer>
        </aside>
    )
}