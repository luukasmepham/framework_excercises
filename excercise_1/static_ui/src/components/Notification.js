import React from 'react';
import styles from './Notification.module.css'

export default function Notification(props) {
    return (
        <div className={styles.container}>
            <span className={styles.header}>{props.topic}</span>{props.body}
        </div>
    )
}
