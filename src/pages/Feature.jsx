import React, { useState } from "react";

import Header from "../components/1_Header/Header";
import Sidebar from "../components/2_Sidebar/Sidebar";
import Intro from "../components/3_Intro/Intro";
import Footer from "../components/7_Footer/Footer";
import Clock from "../components/Clock/Clock";

export default function Home() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Header setOpen={setOpen} />
            <Sidebar open={open} setOpen={setOpen} />
            <Intro />
            <main style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#cadfe8" }}>
                <Clock />
            </main>
            <Footer />
        </>
    );
}