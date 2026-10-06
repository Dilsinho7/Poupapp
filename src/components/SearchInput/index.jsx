import styles from './searchinput.module.css';
import { IconSearch } from '../icons'
import { Input } from '../Input';

export const SearchInput = (props) => {

    return (
        <div className={styles.container}>
            <IconSearch />
            <Input placeholder="Procure seu dinheiro..." {...props}/>
        </div>
    )
}