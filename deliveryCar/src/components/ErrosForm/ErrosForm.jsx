/* eslint-disable react/prop-types */
import styles from './styles.module.css'
import errorIcon from '../../assets/form/errorIcon.png'

const ErrosForm = ({errors}) => {
  return (
    errors !== undefined && (
        <p id={styles.erros}><img src={errorIcon}/>{errors}</p>
    )
  )
}

export default ErrosForm