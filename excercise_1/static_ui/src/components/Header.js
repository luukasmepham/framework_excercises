import React from 'react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className= {styles.background}>
            <div className= {styles.container}>
                <div className={styles.logo}>
                    Helsingin Sanomat
                </div>
                <div><a>Etusivu</a></div>
                <div><a>Uutiset</a></div>
                <div><a>Lehdet</a></div>
                <div><a>Asiakaspalvelu</a></div>
            </div>
            <div className= {styles.buttons}>
                <div className={styles.subscribe}><a>Tilaa</a></div>
                <div><a>Kirjaudu</a></div>
                <div><a>Valikko</a></div>
            </div>
        </div>
    )
}
