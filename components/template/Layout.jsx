import Navbar from "./Navbar"
import styles from "./Layout.module.css";

function Layout({ children }) {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className={styles.container}>
                {children}
            </main>
            <footer className={styles.footer}>
                Next.js Food App | ATEFood Project &copy;
            </footer>
        </div>
    )
}

export default Layout