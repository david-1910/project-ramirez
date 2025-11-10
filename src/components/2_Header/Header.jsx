import './Header.css';

export default function Header() {
    return (
        <>
            <header class="topbar">
                <button id="openSidebar" class="icon-btn" aria-label="Открыть меню" title="Открыть (/)">
                    <span class="icon-burger"></span>
                </button>
                <div class="topbar__brand">
                    <img title="RAMSES - The Coder" src="./img/logo.png" alt="" draggable="false" class="topbar__logo" />
                </div>
                <a href="#contact" class="btn">Связаться</a>
            </header>
        </>
    );
}
