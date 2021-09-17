import React from 'react'
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
                <div className='column1'>
                    <h4> Uutiset </h4>
                </div>
                <div className='column2'>
                    <h4> Lehdet </h4>
                </div>
                <div className='column3'>
                    <h4> Tuki ja palaute </h4>
                </div>
        </div>
    )
}
