import { useEffect, useRef } from "react";
import "./Header.css";
import logo from "../../assets/main-logo/logo.png";

export default function Header({ setOpen }) {
    const topbarRef = useRef(null);

    useEffect(() => {
        const topbar = topbarRef.current;
        if (!topbar) return;

        let scrollTimeout = null;

        const updateTopbar = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 50) {
                topbar.classList.add("scrolled");
            } else {
                topbar.classList.remove("scrolled");
            }
        };

        const onScroll = () => {
            if (!scrollTimeout) {
                scrollTimeout = requestAnimationFrame(() => {
                    updateTopbar();
                    scrollTimeout = null;
                });
            }
        };

        updateTopbar(); // при загрузке

        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);


    return (
        <header className="topbar" ref={topbarRef}>
            <button
                id="openSidebar"
                onClick={() => setOpen(true)}
                className="icon-btn"
                aria-label="Открыть меню"
                title="Открыть (/)"
            >
                <span className="icon-burger"></span>
            </button>
            <div className="topbar__brand">
                <img
                    title="RAMIREZ - The Coder"
                    src={logo}
                    alt=""
                    draggable="false"
                    className="topbar__logo"
                />
            </div>
            <a href="#contact" className="btn">Связаться</a>
        </header>

    );
}
