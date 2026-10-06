import { IconBank } from '../icons'
import styles from './bankitem.module.css'

const formater = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"})

export const BankItem = ({item}) => {
    return (
        <div className={styles.container}>
            <div className={styles.bancoItem}>
                <p><IconBank/></p>
                <p>{item.bank}</p>
            </div>
            <div className={styles.saldo}>
                <p>Saldo</p>
                {formater.format(item.balance)}
            </div>
        </div>
    )
}