import React, { useEffect, useRef } from "react";
import "./Mouse.css";

export default function Mouse() {
    const blobRef = useRef(null);

    useEffect(() => {
        const el = blobRef.current;
        if (!el) return;

        const onMove = (e) => {
            const { clientX, clientY } = e;
            el.style.left = `${clientX}px`;
            el.style.top = `${clientY}px`;
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        return () => window.removeEventListener("pointermove", onMove);
    }, []);

    return (
        <div className="mouse-bg">
            <div ref={blobRef} className="blob" />
            <div className="blurLayer" />
        </div>
    );
}
