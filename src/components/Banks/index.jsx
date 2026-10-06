import { BankItem } from '../BankItem'
import { Button } from '../Button'
import { IconWallet } from '../icons'
import styles from './banks.module.css'

export const Banks = () => {
    const banks = [ 

        { "bank": "Anybank", "balance": 1200 }, 

        { "bank": "Bytebank", "balance": 800 }, 

        { "bank": "Switch Bank", "balance": 1800 } 

    ]

    return (
        <>
            <ul className={styles.banks}>
                {banks.map((bancoItem, index) => {
                    return (
                        <li key={index}>
                            <BankItem item={bancoItem}/>
                        </li>
                    )
                })}
            </ul>
            <div className={styles.actions}>
                <Button>
                    <IconWallet/> Adicionar conta
                </Button>
            </div>
        </>
    )
}