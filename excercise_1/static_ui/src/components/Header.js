import React from 'react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className= {styles.background}>
            <div className= {styles.container}>
                <div className={styles.logo}>
                    Helsingin Sanomat
                </div>
                <div>
                    Etusivu
                </div>
                <div>
                    Uutiset
                </div>
                <div>
                    Lehdet
                </div>
                <div>
                    Asiakaspalvelu
                </div>
            </div>
        </div>
    )
}
