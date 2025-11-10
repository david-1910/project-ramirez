import './Contacts.css';

export default function Contacts() {
    return (
        <>
            <section id="contact" class="contact">
                <div class="container">
                    <h2 class="contact__title font-3">Свяжитесь со мной</h2>
                    <p class="contact__subtitle">Готов обсудить ваш проект или ответить на любые вопросы</p>

                    <div class="contact__content">
                        <div class="contact__info">
                            <div class="contact__info-header">
                                <h3 class="font-3">Давайте поработаем вместе!</h3>
                                <p>Я всегда открыт для новых проектов и интересных предложений. Свяжитесь со мной удобным
                                    для вас способом.</p>
                            </div>

                            <div class="contact__methods">
                                <a href="https://t.me/tg_dovud_ty" target="_blank"
                                    class="contact-card contact-card--telegram">
                                    <div class="contact-card__icon">
                                        <img src="./img/social-logo/telegram-svgrepo-com.svg" alt="Telegram"></img>
                                    </div>
                                    <div class="contact-card__content">
                                        <h4>Telegram</h4>
                                        <p>@tg_dovud_ty</p>
                                        <span class="contact-card__badge">Быстрый ответ</span>
                                    </div>
                                    <div class="contact-card__arrow">→</div>
                                </a>

                                <a href="https://wa.me/+998932501906" target="_blank"
                                    class="contact-card contact-card--whatsapp">
                                    <div class="contact-card__icon">
                                        <img src="./img/social-logo/whatsapp-svgrepo-com.svg" alt="WhatsApp"></img>
                                    </div>
                                    <div class="contact-card__content">
                                        <h4>WhatsApp</h4>
                                        <p>+998 93 250 19 06</p>
                                        <span class="contact-card__badge">24/7</span>
                                    </div>
                                    <div class="contact-card__arrow">→</div>
                                </a>

                                <a href="https://github.com/david-1910" target="_blank"
                                    class="contact-card contact-card--github">
                                    <div class="contact-card__icon">
                                        <img src="./img/social-logo/github-svgrepo-com.svg" alt="GitHub"></img>
                                    </div>
                                    <div class="contact-card__content">
                                        <h4>GitHub</h4>
                                        <p>david-1910</p>
                                        <span class="contact-card__badge">Мои проекты</span>
                                    </div>
                                    <div class="contact-card__arrow">→</div>
                                </a>

                                <a href="https://www.instagram.com/inst_dovud_ty/" target="_blank"
                                    class="contact-card contact-card--instagram">
                                    <div class="contact-card__icon">
                                        <img src="./img/social-logo/instagram-svgrepo-com.svg" alt="Instagram"></img>
                                    </div>
                                    <div class="contact-card__content">
                                        <h4>Instagram</h4>
                                        <p>@inst_dovud_ty</p>
                                        <span class="contact-card__badge">Подписаться</span>
                                    </div>
                                    <div class="contact-card__arrow">→</div>
                                </a>
                            </div>

                            <div class="contact__availability">
                                <div class="availability-indicator">
                                    <span class="availability-dot"></span>
                                    <span class="availability-text">Доступен для новых проектов</span>
                                </div>
                            </div>
                        </div>

                        <div class="contact__form-wrapper" id="contact">
                            <form class="contact__form" id="contactForm">
                                <div class="form-group">
                                    <label for="name">Ваше имя</label>
                                    <input type="text" id="name" name="name" placeholder="Как вас зовут?" required></input>
                                </div>

                                <div class="form-group">
                                    <label for="email">Email или Telegram</label>
                                    <input type="text" id="email" name="email" placeholder="example@mail.com или @username"
                                        required></input> 
                                </div>

                                <div class="form-group">
                                    <label for="subject">Тема обращения</label>
                                    <select id="subject" name="subject" required>
                                        <option value="">Выберите тему</option>
                                        <option value="project">Новый проект</option>
                                        <option value="collaboration">Сотрудничество</option>
                                        <option value="question">Вопрос</option>
                                        <option value="other">Другое</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="message">Сообщение</label>
                                    <textarea id="message" name="message" rows="5"
                                        placeholder="Расскажите о вашем проекте или задайте вопрос..." required></textarea>
                                </div>

                                <button type="submit" class="btn btn--primary">
                                    <span class="btn-text">Отправить сообщение</span>
                                    <span class="btn-icon">✉️</span>
                                </button>

                                <div class="form-message" id="formMessage"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
