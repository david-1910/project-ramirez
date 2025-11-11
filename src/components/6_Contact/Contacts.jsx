import { useRef } from "react";
import { motion } from "framer-motion";
import './Contacts.css';
import telegram from "../../assets/social-logo/telegram.svg";
import whatsapp from "../../assets/social-logo/whatsapp.svg";
import github from "../../assets/social-logo/github.svg";
import instagram from "../../assets/social-logo/instagram.svg";

export default function Contacts() {
    const formRef = useRef(null);
    const messageRef = useRef(null);
    const btnTextRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = formRef.current;
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
                messageRef.current.style.display = "none";
            }, 5000);
        }, 1000);
    };

    const showMessage = (text, type) => {
        const el = messageRef.current;
        el.textContent = text;
        el.className = "form-message " + type;
        el.style.display = "block";
    };

    // Framer Motion Variants
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <motion.h2
                    className="contact__title font-3"
                    initial="hidden"
                    whileInView="show"
                    variants={fadeUpVariants}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Давайте работать вместе!
                </motion.h2>

                <motion.p
                    className="contact__subtitle"
                    initial="hidden"
                    whileInView="show"
                    variants={fadeUpVariants}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Готов обсудить ваш проект или ответить на любые вопросы
                </motion.p>

                <motion.div
                    className="contact__content"
                    initial="hidden"
                    whileInView="show"
                    variants={containerVariants}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div className="contact__info" variants={fadeUpVariants}>
                        <div className="contact__availability">
                            <div className="availability-indicator">
                                <span className="availability-dot"></span>
                                <span className="availability-text">Доступен для новых проектов</span>
                            </div>
                        </div>

                        <div className="contact__methods">
                            {[
                                {
                                    href: "https://t.me/tg_dovud_ty",
                                    icon: telegram,
                                    name: "Telegram",
                                    info: "@tg_dovud_ty",
                                    badge: "Быстрый ответ",
                                    className: "contact-card--telegram"
                                },
                                {
                                    href: "https://wa.me/+998932501906",
                                    icon: whatsapp,
                                    name: "WhatsApp",
                                    info: "+998 93 250 19 06",
                                    badge: "24/7",
                                    className: "contact-card--whatsapp"
                                },
                                {
                                    href: "https://github.com/david-1910",
                                    icon: github,
                                    name: "GitHub",
                                    info: "david-1910",
                                    badge: "Мои проекты",
                                    className: "contact-card--github"
                                },
                                {
                                    href: "https://www.instagram.com/inst_dovud_ty/",
                                    icon: instagram,
                                    name: "Instagram",
                                    info: "@inst_dovud_ty",
                                    badge: "Подписаться",
                                    className: "contact-card--instagram"
                                }
                            ].map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.href}
                                    target="_blank"
                                    className={`contact-card ${item.className}`}
                                    variants={fadeUpVariants}
                                >
                                    <div className="contact-card__icon">
                                        <img src={item.icon} alt={item.name} />
                                    </div>
                                    <div className="contact-card__content">
                                        <h4>{item.name}</h4>
                                        <p>{item.info}</p>
                                        <span className="contact-card__badge">{item.badge}</span>
                                    </div>
                                    <div className="contact-card__arrow">→</div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div className="contact__form-wrapper" variants={fadeUpVariants}>
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
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
