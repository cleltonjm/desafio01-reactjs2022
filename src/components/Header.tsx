import styles from './Header.module.css';
import { Rocket } from 'phosphor-react';

export function Header() {
    return(
        <header>
            <div className={styles.logo}>
                <Rocket className={styles.rocketImg} />
                <h1 className={styles.title}>todo</h1>
            </div>
        </header>
    );
}