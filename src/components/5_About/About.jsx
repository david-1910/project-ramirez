import { useState } from "react";
import { motion } from "framer-motion";
import './About.css';
import profile from "../../assets/main-logo/profile.jpg";

export default function About() {
    const [counters, setCounters] = useState([
        { target: 2.5, value: 0, suffix: '' },
        { target: 25, value: 0, suffix: '' },
        { target: 20, value: 0, suffix: '' },
        { target: 90, value: 0, suffix: '%' },
    ]);

    const [animated, setAnimated] = useState(false); // флаг, чтобы запускать только один раз

    const easeOutQuad = (t) => t * (2 - t);

    const animateCount = (index, to, duration = 1400) => {
        const start = 0;
        const startTime = performance.now();

        const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const value = start + (to - start) * easeOutQuad(progress);
            setCounters((prev) => {
                const newCounters = [...prev];
                newCounters[index].value = to % 1 !== 0 ? value.toFixed(1) : Math.floor(value);
                return newCounters;
            });
            if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
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

    // Функция запуска анимации один раз
    const handleCounters = () => {
        if (!animated) {
            counters.forEach((c, i) => animateCount(i, c.target));
            setAnimated(true);
        }
    };

    return (
        <section className="about">
            <div className="container">
                <motion.h2
                    className="about__title font-3"
                    initial="hidden"
                    whileInView="show"
                    variants={fadeUpVariants}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Обо мне
                </motion.h2>

                <motion.p
                    className="about__subtitle"
                    initial="hidden"
                    whileInView="show"
                    variants={fadeUpVariants}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Frontend & Backend разработчик с страстью к созданию красивых интерфейсов
                </motion.p>

                <motion.div
                    className="about__content"
                    initial="hidden"
                    whileInView="show"
                    variants={containerVariants}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div className="about__image-wrapper" variants={fadeUpVariants}>
                        <div className="about__image-bg"></div>
                        <div className="about__image">
                            <img src={profile} alt="Довуд - Frontend Developer" draggable="false" />
                        </div>
                    </motion.div>

                    <motion.div className="about__text" variants={fadeUpVariants}>
                        <p>
                            Привет! Я <strong>Довуд</strong> - веб-разработчик с опытом создания современных и
                            функциональных веб-приложений. Моя страсть - превращать идеи в реальность через код.
                        </p>
                        <p>
                            Специализируюсь на <strong>Frontend-разработке</strong> с использованием HTML5, CSS3,
                            JavaScript, React и Vue.js. Также имею опыт работы с Backend-технологиями, что позволяет
                            создавать полноценные веб-решения.
                        </p>
                        <p>
                            Я постоянно изучаю новые технологии и следую современным трендам веб-разработки. Верю, что
                            качественный код и внимание к деталям - ключ к успешному проекту.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="about__stats"
                    initial="hidden"
                    whileInView="show"
                    variants={containerVariants}
                    viewport={{ once: true, amount: 0.3 }}
                    onViewportEnter={handleCounters} // запускаем один раз
                >
                    {counters.map((c, i) => (
                        <motion.div className="stat-card" key={i} variants={fadeUpVariants}>
                            <div className="stat-card__number">{c.value}{c.suffix}</div>
                            <div className="stat-card__label">
                                {i === 0 && "Лет опыта"}
                                {i === 1 && "Проектов завершено"}
                                {i === 2 && "Довольных клиентов"}
                                {i === 3 && "Качество кода"}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
