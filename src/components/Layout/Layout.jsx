import { Outlet } from "react-router-dom"
import Header from "../Header/Header"


const Layout = () => (
    <div className="flex flex-col h-screen">
        <Header/>
        <main className="flex-grow container mx-auto p-4">
            <Outlet/>
        </main>
        <footer className="py-6 text-center bg-gray-100 mt-auto">© 2026 My React Project</footer>
    </div>

);

export default Layout