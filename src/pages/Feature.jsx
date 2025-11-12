import React, { useState } from "react";

import Header from "../components/1_Header/Header";
import Sidebar from "../components/2_Sidebar/Sidebar";
import Intro from "../components/3_Intro/Intro";
import Footer from "../components/7_Footer/Footer";
import Mouse from "../components/Mousemove/Mouse";

export default function Home() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Mouse />
            <div className="app-content">
                <Header setOpen={setOpen} />
                <Sidebar open={open} setOpen={setOpen} />
                <Intro />
                <main>
                    
                </main>
                <Footer />
            </div>
        </>
    );
}