import { Title } from '../title'
import styles from './index.module.css'

function Header() {
  return <header className={styles.headerContainer}><Title text={"Filtros"} cardFilter={true} /></header>
}

export {Header}