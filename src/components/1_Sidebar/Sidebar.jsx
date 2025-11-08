export default function Sidebar() {
    return (
        <aside id="sidebar" className="sidebar" aria-label="Сайдбар навигации">
            <div className="sidebar__header">
                <div className="brand">
                    <img
                        draggable="false"
                        title="RAMSES - The Coder"
                        src="/img/logo.png"
                        alt="Логотип"
                        className="brand__logo"
                    />
                </div>
                <button id="closeSidebar" className="icon-btn" aria-label="Закрыть меню" title="Закрыть (Esc)">
                    <span className="icon-close"></span>
                </button>
            </div>

            <nav className="sidebar__nav">
                <a title="Главная" href="/" className="nav-link">Главная</a>
                <a title="Навыки" href="/skills" className="nav-link">Навыки</a>
                <a title="Обo мне" href="/about" className="nav-link">Обo мне</a>
                <a title="Контакты" href="/contact" className="nav-link">Контакты</a>
                <a title="Портфолио" href="/portfolio" className="nav-link">Портфолио</a>
            </nav>

            <div className="sidebar__footer">
                <a title="Telegram" target="_blank" href="https://t.me/tg_dovud_ty" className="btn btn--circle btn--glow-tg">
                    <img src="/img/social-logo/telegram-svgrepo-com.svg" alt="" />
                </a>
                <a title="WhatsApp" target="_blank" href="https://wa.me/+998932501906" className="btn btn--circle btn--glow-wp">
                    <img src="/img/social-logo/whatsapp-svgrepo-com.svg" alt="" />
                </a>
                <a title="GitHub" target="_blank" href="https://github.com/david-1910" className="btn btn--circle btn--glow-gt">
                    <img src="/img/social-logo/github-svgrepo-com.svg" alt="" />
                </a>
                <a title="Instagram" target="_blank" href="https://www.instagram.com/inst_dovud_ty/" className="btn btn--circle btn--glow-inst">
                    <img src="/img/social-logo/instagram-svgrepo-com.svg" alt="" />
                </a>
            </div>
        </aside>
    );
}
