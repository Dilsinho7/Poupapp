import { IconSavings } from "../icons"
import { ProgressBar } from "../ProgressBar"
import styles from './savingsstatus.module.css'

export const SavingStatus = ({ percent }) => {
    return (
        <div className={styles.container}>
            <p>
                <IconSavings/> Economizar
            </p>
            <ProgressBar percent={percent}/>
        </div>
    )
}