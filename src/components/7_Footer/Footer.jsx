import './Footer.css';

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="contact__footer">
                        <div className="footer-content">
                            <div className="footer-brand">
                                <img src="./img/logo.png" alt="RAMSES Logo" className="footer-logo"></img>
                                    <p>Frontend & Backend разработчик</p>
                            </div>
                            <div className="footer-links">
                                <div className="footer-column">
                                    <h4>Навигация</h4>
                                    <a href="./">Главная</a>
                                    <a href="./skills.html">Навыки</a>
                                    <a href="./about.html">Обo мне</a>
                                    <a href="./portfolio.html">Портфолио</a>
                                </div>
                                <div className="footer-column">
                                    <h4>Социальные сети</h4>
                                    <a href="https://t.me/tg_dovud_ty" target="_blank">Telegram</a>
                                    <a href="https://wa.me/+998932501906" target="_blank">WhatsApp</a>
                                    <a href="https://github.com/david-1910" target="_blank">GitHub</a>
                                    <a href="https://www.instagram.com/inst_dovud_ty/" target="_blank">Instagram</a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p>&copy; <span id="year">2025</span> RAMSES. Все права защищены.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
