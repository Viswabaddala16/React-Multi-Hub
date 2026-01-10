import { Outlet } from "react-router-dom"
import Header from "../Header/Header"


const Layout = () => (
    <div className="flex flex-col h-screen w-full  bg-gray-50">
        <Header/>
        <main className="flex-grow flex items-center container mx-auto py-10 px-4">
            <Outlet/>
        </main>
        <footer className="py-6 text-center bg-white border-t text-gray-500 mt-auto">© 2026 My React Project</footer>
    </div>

);

export default Layout