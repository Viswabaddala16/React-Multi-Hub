import { Outlet, useLocation } from "react-router-dom"
import Header from "../Header/Header"
import { AnimatePresence } from "framer-motion";


function Layout () {
    const location = useLocation();
    return(
        <div className="flex flex-col items-center bg-gray-50 w-full min-h-screen">
            <Header/>
            <AnimatePresence mode="wait">
                <main key = {location.pathname} className="w-full max-w-6xl flex  justify-center container mx-auto py-10 px-4">
                    <Outlet/>
                </main>
            </AnimatePresence>
            
            <footer className="py-6 text-center bg-white border-t text-gray-500 mt-auto">© 2026 My React Project</footer>
        </div>
    )
   

};

export default Layout