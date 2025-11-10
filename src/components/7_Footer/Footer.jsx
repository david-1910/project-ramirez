import './Footer.css';

export default function Footer() {
    return (
        <>
            <footer class="footer">
                <div class="container">
                    <div class="contact__footer">
                        <div class="footer-content">
                            <div class="footer-brand">
                                <img src="./img/logo.png" alt="RAMSES Logo" class="footer-logo"></img>
                                    <p>Frontend & Backend разработчик</p>
                            </div>
                            <div class="footer-links">
                                <div class="footer-column">
                                    <h4>Навигация</h4>
                                    <a href="./">Главная</a>
                                    <a href="./skills.html">Навыки</a>
                                    <a href="./about.html">Обo мне</a>
                                    <a href="./portfolio.html">Портфолио</a>
                                </div>
                                <div class="footer-column">
                                    <h4>Социальные сети</h4>
                                    <a href="https://t.me/tg_dovud_ty" target="_blank">Telegram</a>
                                    <a href="https://wa.me/+998932501906" target="_blank">WhatsApp</a>
                                    <a href="https://github.com/david-1910" target="_blank">GitHub</a>
                                    <a href="https://www.instagram.com/inst_dovud_ty/" target="_blank">Instagram</a>
                                </div>
                            </div>
                        </div>
                        <div class="footer-bottom">
                            <p>&copy; <span id="year">2025</span> RAMSES. Все права защищены.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
