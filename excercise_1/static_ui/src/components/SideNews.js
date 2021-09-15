import React from 'react';
import styles from './SideNews.module.css'

export default function SideNews(props) {
    return (
        <div className={styles.container}>
            <h1>{props.topic}</h1>
            <p>{props.body}</p>
        </div>
    )
}
