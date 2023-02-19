import Navbar from "./Navbar"

function Layout({ children }) {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main style={{minHeight: "100px"}}>
                {children}
            </main>
        </div>
    )
}

export default Layout