import Navbar from "@components/Navbar/Navbar";

function Layout({ children }) {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <footer>This is the footer</footer>
        </div>
    )
}

export default Layout
