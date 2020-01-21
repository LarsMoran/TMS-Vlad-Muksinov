import styles from './styles.module.css'
import React from 'react'

export default function BoxContainer ({ children }) {
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}