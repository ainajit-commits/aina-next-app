"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import { myPets } from "./components/herbItem";




export default function HerbFrom() {

    return (
        <>
            <Header />
                <section className="relative bg-cover bg-center h-fit flex items-center justify-center text-center" style={{ backgroundImage: `url('xxx')` }}>
            <div className="absolute inset-0 bg-sky-200"></div>
            <div className="relative z-10 p-4 text-white">
        <h1 className="text-5xl font-extrabold mb-4">Xxx Cover</h1>
            <p className="text-lg mb-8">Xxx</p>
                <a href="#" className="bg-indigo-600 px-6 py-3 rounded-lg">Let's Go...</a>
            </div>
            </section>
            <Footer />
            <div className="absolute inset-0 bg-sky-200"></div>
            <div className="relative z-10 p-4 text-white"></div>rights reserved
      <p className="text-xs text-slate-400">&copy; 2026 By อัยนา จิตรชูชื่น รหัสนักศึกษา 026830491002-2</p>

        </>
    );
}