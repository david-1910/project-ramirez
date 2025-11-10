import './Header.css';

export default function Header() {
    return (
        <>
            <header className="topbar">
                <button id="openSidebar" className="icon-btn" aria-label="Открыть меню" title="Открыть (/)">
                    <span className="icon-burger"></span>
                </button>
                <div className="topbar__brand">
                    <img title="RAMSES - The Coder" src="./img/logo.png" alt="" draggable="false" className="topbar__logo" />
                </div>
                <a href="#contact" className="btn">Связаться</a>
            </header>
        </>
    );
}
