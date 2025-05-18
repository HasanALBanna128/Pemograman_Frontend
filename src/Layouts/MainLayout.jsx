// src/Layouts/MainLayout.jsx
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                <Outlet /> {/* Tempat halaman muncul */}
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default MainLayout;
