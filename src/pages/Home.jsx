// import Sidebar from "../components/1_Sidebar/Sidebar";
import Header from "../components/2_Header/Header";
import Intro from "../components/3_Intro/Intro";
import Skills from "../components/4_Skills/Skills";
import About from "../components/5_About/About";
import Contacts from "../components/6_Contact/Contacts";
import Footer from "../components/7_Footer/Footer";

export default function Home() {
    return (
        <>
            {/* <Sidebar /> */}
            <Header />
            <main>
                <Intro />
                <Skills />
                <About />
                <Contacts />
            </main>
            <Footer />
        </>
    );
}
