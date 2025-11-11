import { useRef } from "react";
import './Contacts.css';

export default function Contacts() {
    const formRef = useRef(null);
    const messageRef = useRef(null);
    const btnTextRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = formRef.current;
        const formMessage = messageRef.current;
        const submitBtn = form.querySelector('button[type="submit"]');
        const btnText = btnTextRef.current;

        const formData = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value,
        };

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            showMessage("Пожалуйста, заполните все поля!", "error");
            return;
        }

        btnText.textContent = "Отправка...";
        submitBtn.disabled = true;

        setTimeout(() => {
            const telegramMessage = `
🔔 Новое сообщение с сайта!

👤 Имя: ${formData.name}
📧 Контакт: ${formData.email}
📋 Тема: ${formData.subject}

💬 Сообщение:
${formData.message}
      `;

            const telegramUrl = `https://t.me/tg_dovud_ty?text=${encodeURIComponent(telegramMessage)}`;
            window.open(telegramUrl, "_blank");

            showMessage("Сообщение готово к отправке! Отправьте его в Telegram.", "success");

            form.reset();
            btnText.textContent = "Отправить сообщение";
            submitBtn.disabled = false;

            setTimeout(() => {
                formMessage.style.display = "none";
            }, 5000);
        }, 1000);
    };

    const showMessage = (text, type) => {
        const el = messageRef.current;
        el.textContent = text;
        el.className = "form-message " + type;
        el.style.display = "block";
    };

    return (
        <>
            <section id="contact" className="contact">
                <div className="container">
                    <h2 className="contact__title font-3">Свяжитесь со мной</h2>
                    <p className="contact__subtitle">Готов обсудить ваш проект или ответить на любые вопросы</p>

                    <div className="contact__content">
                        <div className="contact__info">
                            <div className="contact__info-header">
                                <h3 className="font-3">Давайте работать вместе!</h3>
                                <p>Я всегда открыт для новых проектов и интересных предложений. Свяжитесь со мной удобным
                                    для вас способом.</p>
                            </div>

                            <div className="contact__methods">
                                <a href="https://t.me/tg_dovud_ty" target="_blank"
                                    className="contact-card contact-card--telegram">
                                    <div className="contact-card__icon">
                                        <img src="./img/social-logo/telegram-svgrepo-com.svg" alt="Telegram"/>
                                    </div>
                                    <div className="contact-card__content">
                                        <h4>Telegram</h4>
                                        <p>@tg_dovud_ty</p>
                                        <span className="contact-card__badge">Быстрый ответ</span>
                                    </div>
                                    <div className="contact-card__arrow">→</div>
                                </a>

                                <a href="https://wa.me/+998932501906" target="_blank"
                                    className="contact-card contact-card--whatsapp">
                                    <div className="contact-card__icon">
                                        <img src="./img/social-logo/whatsapp-svgrepo-com.svg" alt="WhatsApp"></img>
                                    </div>
                                    <div className="contact-card__content">
                                        <h4>WhatsApp</h4>
                                        <p>+998 93 250 19 06</p>
                                        <span className="contact-card__badge">24/7</span>
                                    </div>
                                    <div className="contact-card__arrow">→</div>
                                </a>

                                <a href="https://github.com/david-1910" target="_blank"
                                    className="contact-card contact-card--github">
                                    <div className="contact-card__icon">
                                        <img src="./img/social-logo/github-svgrepo-com.svg" alt="GitHub"></img>
                                    </div>
                                    <div className="contact-card__content">
                                        <h4>GitHub</h4>
                                        <p>david-1910</p>
                                        <span className="contact-card__badge">Мои проекты</span>
                                    </div>
                                    <div className="contact-card__arrow">→</div>
                                </a>

                                <a href="https://www.instagram.com/inst_dovud_ty/" target="_blank"
                                    className="contact-card contact-card--instagram">
                                    <div className="contact-card__icon">
                                        <img src="./img/social-logo/instagram-svgrepo-com.svg" alt="Instagram"></img>
                                    </div>
                                    <div className="contact-card__content">
                                        <h4>Instagram</h4>
                                        <p>@inst_dovud_ty</p>
                                        <span className="contact-card__badge">Подписаться</span>
                                    </div>
                                    <div className="contact-card__arrow">→</div>
                                </a>
                            </div>

                            <div className="contact__availability">
                                <div className="availability-indicator">
                                    <span className="availability-dot"></span>
                                    <span className="availability-text">Доступен для новых проектов</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact__form-wrapper">
                            <form className="contact__form" ref={formRef} onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Ваше имя</label>
                                    <input type="text" id="name" name="name" placeholder="Как вас зовут?" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email или Telegram</label>
                                    <input type="text" id="email" name="email" placeholder="example@mail.com или @username" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Тема обращения</label>
                                    <select id="subject" name="subject" required>
                                        <option value="">Выберите тему</option>
                                        <option value="project">Новый проект</option>
                                        <option value="collaboration">Сотрудничество</option>
                                        <option value="question">Вопрос</option>
                                        <option value="other">Другое</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Сообщение</label>
                                    <textarea id="message" name="message" rows="5" placeholder="Расскажите о вашем проекте..." required />
                                </div>

                                <button type="submit" className="btn btn--primary">
                                    <span className="btn-text" ref={btnTextRef}>Отправить сообщение</span>
                                    <span className="btn-icon">✉️</span>
                                </button>

                                <div className="form-message" ref={messageRef}></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
