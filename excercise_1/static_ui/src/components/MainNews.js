import React from 'react';
import styles from './MainNews.module.css'

export default function MainNews(props) {
    return (
        <div className={styles.container}>
            <h1>{props.topic}</h1>
            <img src = {props.image} />
            <h3>{props.synopsis}</h3>
            <p> {props.body}</p>
        </div>
    )
}
