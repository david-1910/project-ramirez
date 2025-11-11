import React, { useState } from "react";

import Fade from "../components/Animation/Fade";
import Header from "../components/1_Header/Header";
import Sidebar from "../components/2_Sidebar/Sidebar";
import Intro from "../components/3_Intro/Intro";
import Skills from "../components/4_Skills/Skills";
import About from "../components/5_About/About";
import Contacts from "../components/6_Contact/Contacts";
import Footer from "../components/7_Footer/Footer";

export default function Home() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Header setOpen={setOpen} />
            <Sidebar open={open} setOpen={setOpen} />
            <main>
                <Intro />
                <Fade>
                    <Skills />
                </Fade>
                <About />
                <Contacts />
            </main>
            <Footer />
        </>
    );
}
