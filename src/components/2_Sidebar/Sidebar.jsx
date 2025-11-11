import React, { useState, useRef, useEffect } from "react";
import "./Sidebar.css";
import logo from "../../assets/main-logo/logo.png";
import telegram from "../../assets/social-logo/telegram.svg";
import whatsapp from "../../assets/social-logo/whatsapp.svg";
import github from "../../assets/social-logo/github.svg";
import instagram from "../../assets/social-logo/instagram.svg";

export default function Sidebar({ open, setOpen }) {
    const sidebarRef = useRef(null);
    const scrimRef = useRef(null);

    // drag state
    const startX = useRef(0);
    const dragging = useRef(false);
    const openedAtStart = useRef(false);
    const EDGE = 24;

    const resetInline = () => {
        if (sidebarRef.current) {
            sidebarRef.current.style.transition = "";
            sidebarRef.current.style.transform = "";
        }
        if (scrimRef.current) {
            scrimRef.current.style.opacity = "";
        }
    };

    const closeSidebar = () => {
        setOpen(false);
        resetInline();
    };
    const openSidebar = () => {
        setOpen(true);
        resetInline();
    };

    // клавиши
    useEffect(() => {
        const handler = (e) => {
            if (e.key === "Escape") closeSidebar();
            if (e.key === "/" && !open) openSidebar();
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [open]);

    // drag handlers
    const onPointerDown = (e) => {
        const x = e.clientX ?? e.touches?.[0]?.clientX;
        if (x == null) return;

        const isOnEdgeOrOpen = x < EDGE || open;
        if (!isOnEdgeOrOpen) return;

        dragging.current = true;
        openedAtStart.current = open;
        startX.current = x;

        document.addEventListener("pointermove", onPointerMove);
        document.addEventListener("pointerup", onPointerUp, { once: true });
        document.addEventListener("touchmove", onPointerMove, { passive: false });
        document.addEventListener("touchend", onPointerUp, { once: true });
    };

    const onPointerMove = (e) => {
        if (!dragging.current || !sidebarRef.current || !scrimRef.current) return;
        const x = e.clientX ?? e.touches?.[0]?.clientX;
        if (x == null) return;

        const drawerWidth = Math.min(
            320,
            sidebarRef.current.getBoundingClientRect().width || 320
        );

        if (!openedAtStart.current) {
            // тянем из-за края
            const translate = Math.min(0, -drawerWidth + x);
            sidebarRef.current.style.transition = "none";
            sidebarRef.current.style.transform = `translateX(${translate}px)`;
            scrimRef.current.classList.add("visible");
            scrimRef.current.style.opacity = Math.max(0, Math.min(1, x / drawerWidth));
        } else {
            // тянем закрыть
            const translate = Math.min(0, -(x - startX.current));
            sidebarRef.current.style.transition = "none";
            sidebarRef.current.style.transform = `translateX(${translate}px)`;
            scrimRef.current.style.opacity = Math.max(
                0,
                Math.min(1, 1 - (x - startX.current) / drawerWidth)
            );
        }
        e.preventDefault();
    };

    const onPointerUp = () => {
        dragging.current = false;
        if (!sidebarRef.current) return;

        const rect = sidebarRef.current.getBoundingClientRect();
        const halfVisible = rect.left >= -(rect.width / 2);

        resetInline();
        if (halfVisible) openSidebar();
        else closeSidebar();

        document.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("touchmove", onPointerMove);
    };

    useEffect(() => {
        document.addEventListener("pointerdown", onPointerDown);
        document.addEventListener("touchstart", onPointerDown, { passive: true });
        return () => {
            document.removeEventListener("pointerdown", onPointerDown);
            document.removeEventListener("touchstart", onPointerDown);
        };
    }, [open]);

    return (
        <>
            <aside
                ref={sidebarRef}
                id="sidebar"
                className={`sidebar ${open ? "open" : ""}`}
                aria-label="Сайдбар навигации"
            >
                <div className="sidebar__header">
                    <div className="brand">
                        <img
                            draggable="false"
                            title="RAMSES - The Coder"
                            src={logo}
                            alt="Логотип"
                            className="brand__logo"
                        />
                    </div>
                    <button
                        id="closeSidebar"
                        className="icon-btn"
                        aria-label="Закрыть меню"
                        title="Закрыть (Esc)"
                        onClick={closeSidebar}
                    >
                        <span className="icon-close"></span>
                    </button>
                </div>

                <nav className="sidebar__nav">
                    <a href="/" className="nav-link">Главная</a>
                </nav>

                <div className="sidebar__footer">
                    <a title="Telegram" target="_blank" href="https://t.me/tg_dovud_ty" class="btn btn--circle btn--glow-tg">
                        <img src={telegram} alt="Telegram"/>
                    </a>
                    <a title="WhatsApp" target="_blank" href="https://wa.me/+998932501906" class="btn btn--circle btn--glow-wp">
                        <img src={whatsapp} alt="WhatsApp"/>
                    </a>
                    <a title="Instagram" target="_blank" href="https://www.instagram.com/inst_dovud_ty/"
                        class="btn btn--circle btn--glow-inst">
                        <img src={instagram} alt="Instagram"/>
                    </a>
                    <a title="GitHub" target="_blank" href="https://github.com/david-1910" class="btn btn--circle btn--glow-gt">
                        <img src={github} alt="GitHub"/>
                    </a>
                </div>
            </aside>
            <div
                ref={scrimRef}
                id="scrim"
                className={`scrim ${open ? "visible" : ""}`}
                onClick={closeSidebar}
                tabIndex={-1}
                aria-hidden={!open}
            />
        </>
    );
}
