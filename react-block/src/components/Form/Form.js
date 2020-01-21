import styles from './styles.module.css'
import React from 'react'

export default function Form (props) {

const onChangeHandler = (event) => {
    props.onChange(event.target.value)
}
const onSubmitHandler = event => {
    event.preventDefault()
      props.onSubmit()
      props.onChange('')
  }

    return (
        <form onSubmit={onSubmitHandler}  className={styles.container}>
            <input value={props.inputValue} className={styles.input} onChange={onChangeHandler}></input>
            <button disabled={props.emptyData} className={styles.button}>Add</button>
        </form>
    )
}