import { Outlet } from "react-router-dom"
import Header from "../Header/Header"


const Layout = () => {
  return (
    <div className="app-container">
        <Header/>
        <main style={{minHeight: "80vh"}}>
            <Outlet/>
        </main>
        <footer style={{textAlign: "center",padding: "20px"}}>© 2026 My React Project</footer>
    </div>
  )
}

export default Layout