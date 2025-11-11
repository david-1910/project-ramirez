import './Skills.css';
import { motion } from "framer-motion";
import html from "../../assets/skills/html.svg";
import css from "../../assets/skills/css.svg";
import js from "../../assets/skills/js.svg";
import react from "../../assets/skills/react.svg";
import vue from "../../assets/skills/vue.svg";
import vite from "../../assets/skills/vite.svg";
import tailwind from "../../assets/skills/tailwind.svg";
import bootstrap from "../../assets/skills/bootstrap.svg";
import git from "../../assets/skills/git.svg";

const skillsData = [
    {
        name: "HTML5",
        icon: html,
        rating: "5",
        stats: [{ value: "15", label: "проектов" }, { value: "2.5", label: "год" }],
        tags: ["⚙️ Валидный HTML", "🧱 Семантика", "🧩 Доступность", "🚀Производительность", "🧭 Логическая структура"]
    },
    {
        name: "CSS3",
        icon: css,
        rating: "4.7",
        stats: [{ value: "15", label: "проектов" }, { value: "2.5", label: "года" }],
        tags: ["Flexbox", "Grid", "📱 Адаптивность", "🧱 Структура", "🧭 Кроссбраузерность", "🔍 Чистота", "🚀 Оптимизация", "Анимации", "💡 Переменные(SCSS)"]
    },
    {
        name: "JavaScript",
        icon: js,
        rating: "4.5",
        stats: [{ value: "12", label: "проектов" }, { value: "1.5", label: "года" }],
        tags: ["⚙️ Современность(ES6+)", "DOM", "⚡ Асинхронность", "🔐 Безопасность", "🧠 Читаемость", "🧩 Модульность"]
    },
    {
        name: "React",
        icon: react,
        rating: "4.6",
        stats: [{ value: "3", label: "проектов" }, { value: "4", label: "месяца" }],
        tags: ["🧩 Hooks", "🎨 UI-компоненты", "🧱 Структура", "🧭 useEffect", "📦 Состояние", "⚛️ SPA"]
    },
    {
        name: "Vue.js",
        icon: vue,
        rating: "4.3",
        stats: [{ value: "3", label: "проекта" }, { value: "4", label: "месяца" }],
        tags: ["🌐 Vuex/Pinia", "🗺️ Vue Router", "⚡ Реактивность", "🧩 Компонентный", "🛠️ Options/Composition API", "🔄 Двустороннее связывание(v-model)"]
    },
    {
        name: "Vite",
        icon: vite,
        rating: "4.5",
        stats: [{ value: "3", label: "проекта" }, { value: "4", label: "месяца" }],
        tags: ["🏎️ Быстрая", "🧩 Модульная сборка", "⚡ Оптимизация", "🎨 Лёгкая настройка CSS/Assets", "🛠️ Минимальная конфигурация", "🔄 HMR(Hot Module Replacement)"]
    },
    {
        name: "TailWind CSS",
        icon: tailwind,
        rating: "4.6",
        stats: [{ value: "3", label: "проекта" }, { value: "2", label: "месяца" }],
        tags: ["⚡ Быстрая разработка", "🌈 Конфигурируемость", "📏 Mobile-first", "⚙️ JIT (Just-in-Time)", "🛠️ Плагинная система", "🚀 Оптимизация", "📝 Удобство написания"]
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
        rating: "4.4",
        stats: [{ value: "нет", label: "проектов" }, { value: "1", label: "месяц" }],
        tags: ["🎨 Утилиты CSS", "🖼️ Компоненты", "📐 Сетка(Grid)", "📱 Адаптивность", "🛠️ JS-компоненты", "🧩 Плагинная экосистема", "🌐 Кроссбраузерность"]
    },
    {
        name: "Git",
        icon: git,
        rating: "4.8",
        stats: [{ value: "15", label: "проектов" }, { value: "2.5", label: "года" }],
        tags: ["🌳 Репозитории", "🔄 Коммиты", "🏷️ Ветки(Branches)", "🌐 GitHub/GitLab", "📜 История(Log)", "🔀 Слияние(Merge)", "🧩 Стаджинг(Stage)", "⏪ Откат(Revert/Reset)"]
    }
];

// Определяем вариант для карточек с задержкой (stagger)
const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Skills() {
    return (
        <section className="skills">
            <div className="container">
                <div className="skills__inner">
                    <h2 className="skills__title font-3">Мои навыки:</h2>
                    <motion.div
                        className="skills__cards"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {skillsData.map((skill, idx) => (
                            <motion.div className="skills__card" key={idx} variants={cardVariants}>
                                <div className="skills__card-inner">
                                    <div className="skills__card-header">
                                        <img src={skill.icon} alt={skill.name} />
                                        <h3>{skill.name}</h3>
                                    </div>
                                    <div className="skills__card-rating">
                                        <span className="rating-value">{skill.rating}</span>
                                        <div className="stars">
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skills__card-stats">
                                    {skill.stats.map((stat, i) => (
                                        <div className="stat" key={i}>
                                            <span className="stat-value">{stat.value}</span>
                                            <span className="stat-label">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <motion.div
                                    className="skills__card-tags"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    {skill.tags.map((tag, i) => (
                                        <span className="tag" key={i}>{tag}</span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
