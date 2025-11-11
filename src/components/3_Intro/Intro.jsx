import { useEffect, useRef, useState } from "react";
import "./Intro.css";

const WORDS = [
    "Frontend & Backend Разработчик",
    "Создаю интерфейсы и API",
    "Быстро, стильно, современно",
    "Готовые сайты на GitHub",
    "Переходи скорее",
    "Это займет Не много времени",
    "Начнем уже сотрудничество в Месте",
    "Я люблю тебя Марьям ❤️👨‍💻",
];

const TYPING_SPEED = 60;
const DELETING_SPEED = 35;
const PAUSE_AFTER_TYPING = 1700;
const PAUSE_AFTER_DELETING = 300;

export default function Intro() {
    const typedRef = useRef(null);
    const cursorRef = useRef(null);
    const containerRef = useRef(null);

    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeoutId;

        const updateCursorPosition = () => {
            const typedEl = typedRef.current;
            const containerEl = containerRef.current;
            const cursorEl = cursorRef.current;
            if (!typedEl || !containerEl || !cursorEl) return;

            const typedRect = typedEl.getBoundingClientRect();
            const containerRect = containerEl.getBoundingClientRect();
            const left =
                typedRect.width > 0
                    ? typedRect.right - containerRect.left
                    : typedEl.offsetLeft;
            cursorEl.style.left = left + 2 + "px";
        };

        const currentWord = WORDS[wordIndex];

        if (!isDeleting && charIndex <= currentWord.length) {
            typedRef.current.textContent = currentWord.slice(0, charIndex);
            updateCursorPosition();

            if (charIndex === currentWord.length) {
                timeoutId = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPING);
            } else {
                timeoutId = setTimeout(() => setCharIndex((i) => i + 1), TYPING_SPEED);
            }
        }

        if (isDeleting && charIndex >= 0) {
            typedRef.current.textContent = currentWord.slice(0, charIndex);
            updateCursorPosition();

            if (charIndex === 0) {
                setIsDeleting(false);
                setWordIndex((i) => (i + 1) % WORDS.length);
                timeoutId = setTimeout(() => setCharIndex(0), PAUSE_AFTER_DELETING);
            } else {
                timeoutId = setTimeout(() => setCharIndex((i) => i - 1), DELETING_SPEED);
            }
        }

        return () => clearTimeout(timeoutId);
    }, [charIndex, isDeleting, wordIndex]);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            if (cursorRef.current) {
                cursorRef.current.style.animation = "none";
                cursorRef.current.style.transition = "none";
            }
        }

        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() =>
                requestAnimationFrame(() => {
                    const typedEl = typedRef.current;
                    if (typedEl) typedEl.textContent = WORDS[wordIndex].slice(0, charIndex);
                })
            );
        }

        const onResize = () => requestAnimationFrame(() => {
            const typedEl = typedRef.current;
            const containerEl = containerRef.current;
            const cursorEl = cursorRef.current;
            if (!typedEl || !containerEl || !cursorEl) return;

            const typedRect = typedEl.getBoundingClientRect();
            const containerRect = containerEl.getBoundingClientRect();
            const left =
                typedRect.width > 0
                    ? typedRect.right - containerRect.left
                    : typedEl.offsetLeft;
            cursorEl.style.left = left + 2 + "px";
        });

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [charIndex, wordIndex]);

    return (
        <section className="section__intro intro">
            <div className="container">
                <div className="intro__inner">
                    <h1 className="intro__title font-3">
                        Привет, я Ramirez <span className="wave">👋</span>
                    </h1>
                    <p className="intro__subtitle font-5" ref={containerRef}>
                        <span className="intro__typed" ref={typedRef} aria-live="polite"></span>
                        <span className="intro__cursor" ref={cursorRef} aria-hidden="true"></span>
                    </p>
                </div>
            </div>
            <div className="intro__gradient"></div>
            <ul className="circles">
                {Array.from({ length: 20 }).map((_, i) => (
                    <li key={i}></li>
                ))}
            </ul>
        </section>
    );
}