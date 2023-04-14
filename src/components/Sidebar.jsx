import styles from './Sidebar.modules.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />
            <div className={styles.profile}>
                <strong>Douglas S. Oliveira</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}