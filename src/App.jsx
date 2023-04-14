import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}></div>
      <aside>sidebar</aside>
      <main></main>
    </div>
  )
}

export default App
