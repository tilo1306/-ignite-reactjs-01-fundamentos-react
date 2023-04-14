import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}></div>
      <Sidebar />
      <main></main>
    </div>
  )
}

export default App
