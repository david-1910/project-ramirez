import './Skills.css';
import html from "../../assets/skills/html.svg";
import css from "../../assets/skills/css.svg";
import js from "../../assets/skills/js.svg";
import react from "../../assets/skills/react.svg";
import vue from "../../assets/skills/vue.svg";
import vite from "../../assets/skills/vite.svg";
import tailwind from "../../assets/skills/tailwind.svg";
import bootstrap from "../../assets/skills/bootstrap.svg";
import git from "../../assets/skills/git.svg";

export default function Skills() {
    return (
        <>
            <section className="skills">
                <div className="container">
                    <div className="skills__inner">
                        <h2 className="skills__title font-3">Мои навыки:</h2>
                        <div className="skills__cards">
                            <div className="skills__card">
                                <div className="skills__card-inner">
                                    <div className="skills__card-header">
                                        <img src={html} alt="" />
                                        <h3>HTML5</h3>
                                    </div>
                                    <div className="skills__card-rating">
                                        <span className="rating-value">5</span>
                                        <div className="stars">
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                            <span className="star star-5">★</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skills__card-stats">
                                    <div className="stat">
                                        <span className="stat-value">15</span>
                                        <span className="stat-label">проектов</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-value">2.5</span>
                                        <span className="stat-label">год</span>
                                    </div>
                                </div>
                                <div className="skills__card-tags">
                                    <span className="tag">⚙️ Валидный HTML</span>
                                    <span className="tag">🧱 Семантика</span>
                                    <span className="tag">🧩 Доступность</span>
                                    <span className="tag">🚀Производительность</span>
                                    <span className="tag">🧭 Логическая структура</span>
                                </div>
                            </div>

                            <div className="skills__card">
                                <div className="skills__card-inner">
                                    <div className="skills__card-header">
                                        <img src={css} alt="" />
                                        <h3>CSS3</h3>
                                    </div>
                                    <div className="skills__card-rating">
                                        <span className="rating-value">4.7</span>
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
                                    <div className="stat">
                                        <span className="stat-value">15</span>
                                        <span className="stat-label">проектов</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-value">2.5</span>
                                        <span className="stat-label">года</span>
                                    </div>
                                </div>

                                <div className="skills__card-tags">
                                    <span className="tag">Flexbox</span>
                                    <span className="tag">Grid</span>
                                    <span className="tag">📱 Адаптивность</span>
                                    <span className="tag">🧱 Структура</span>
                                    <span className="tag">🧭 Кроссбраузерность</span>
                                    <span className="tag">🔍 Чистота</span>
                                    <span className="tag">🚀 Оптимизация</span>
                                    <span className="tag">Анимации</span>
                                    <span className="tag">💡 Переменные(SCSS)</span>

                                </div>
                            </div>

                            <div className="skills__card">
                                <div className="skills__card-inner">
                                    <div className="skills__card-header">
                                        <img src={js} alt="" />
                                        <h3>JavaScript</h3>
                                    </div>
                                    <div className="skills__card-rating">
                                        <span className="rating-value">4.5</span>
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
                                    <div className="stat">
                                        <span className="stat-value">12</span>
                                        <span className="stat-label">проектов</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-value">1.5</span>
                                        <span className="stat-label">года</span>
                                    </div>
                                </div>
                                <div className="skills__card-tags">
                                    <span className="tag">⚙️ Современность(ES6+)</span>
                                    <span className="tag">DOM</span>
                                    <span className="tag">⚡ Асинхронность</span>
                                    <span className="tag">🔐 Безопасность</span>
                                    <span className="tag">🧠 Читаемость</span>
                                    <span className="tag">🧩 Модульность</span>
                                </div>
                            </div>
                            <div className="skills__card">
                                <div className="skills__card-inner">
                                    <div className="skills__card-header">
                                        <img src={react} alt="" />
                                        <h3>React</h3>
                                    </div>
                                    <div className="skills__card-rating">
                                        <span className="rating-value">4.6</span>
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
                                    <div className="stat">
                                        <span className="stat-value">3</span>
                                        <span className="stat-label">проектов</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-value">4</span>
                                        <span className="stat-label">месяца</span>
                                    </div>
                                </div>
                                <div className="skills__card-tags">
                                    <span className="tag">🧩 Hooks</span>
                                    <span className="tag">🎨 UI-компоненты</span>
                                    <span className="tag">🧱 Структура</span>
                                    <span className="tag">🧭 useEffect</span>
                                    <span className="tag">📦 Состояние</span>
                                    <span className="tag">⚛️ SPA</span>
                                </div>
                            </div>
                            <div className="skills__card">
                                <div className="skills__card-inner">
                                    <div className="skills__card-header">
                                        <img src={vue} alt="" />
                                        <h3>Vue.js</h3>
                                    </div>
                                    <div className="skills__card-rating">
                                        <span className="rating-value">4.3</span>
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
                                    <div className="stat">
                                        <span className="stat-value">3</span>
                                        <span className="stat-label">проекта</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-value">4</span>
                                        <span className="stat-label">месяца</span>
                                    </div>
                                </div>
                                <div className="skills__card-tags">
                                    <span className="tag">🌐 Vuex/Pinia</span>
                                    <span className="tag">🗺️ Vue Router</span>
                                    <span className="tag">⚡ Реактивность</span>
                                    <span className="tag">🧩 Компонентный</span>
                                    <span className="tag">🛠️ Options/Composition API</span>
                                    <span className="tag">🔄 Двустороннее связывание(v-model)</span>
                                </div>
                            </div>
                            <div className="skills__card">
                                <div className="skills__card-inner">
                                    <div className="skills__card-header">
                                        <img src={vite} alt="" />
                                        <h3>Vite</h3>
                                    </div>
                                    <div className="skills__card-rating">
                                        <span className="rating-value">4.5</span>
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
                                    <div className="stat">
                                        <span className="stat-value">3</span>
                                        <span className="stat-label">проекта</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-value">4</span>
                                        <span className="stat-label">месяца</span>
                                    </div>
                                </div>
                                <div className="skills__card-tags">
                                    <span className="tag">🏎️ Быстрая</span>
                                    <span className="tag">🧩 Модульная сборка</span>
                                    <span className="tag">⚡ Оптимизация</span>
                                    <span className="tag">🎨 Лёгкая настройка CSS/Assets</span>
                                    <span className="tag">🛠️ Минимальная конфигурация</span>
                                    <span className="tag">🔄 HMR(Hot Module Replacement)</span>
                                </div>
                            </div>
                            <div className="skills__card">
                                <div className="skills__card-inner">
                                    <div className="skills__card-header">
                                        <img src={tailwind} alt="" />
                                        <h3>TailWind CSS</h3>
                                    </div>
                                    <div className="skills__card-rating">
                                        <span className="rating-value">4.6</span>
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
                                    <div className="stat">
                                        <span className="stat-value">3</span>
                                        <span className="stat-label">проекта</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-value">2</span>
                                        <span className="stat-label">месяца</span>
                                    </div>
                                </div>
                                <div className="skills__card-tags">
                                    <span className="tag">⚡ Быстрая разработка</span>
                                    <span className="tag">🌈 Конфигурируемость</span>
                                    <span className="tag">📏 Mobile-first</span>
                                    <span className="tag">⚙️ JIT (Just-in-Time)</span>
                                    <span className="tag">🛠️ Плагинная система</span>
                                    <span className="tag">🚀 Оптимизация</span>
                                    <span className="tag">📝 Удобство написания</span>
                                </div>
                            </div>
                            <div className="skills__card">
                                <div className="skills__card-inner">
                                    <div className="skills__card-header">
                                        <img src={bootstrap} alt="" />
                                        <h3>Bootstrap</h3>
                                    </div>
                                    <div className="skills__card-rating">
                                        <span className="rating-value">4.4</span>
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
                                    <div className="stat">
                                        <span className="stat-value">нет</span>
                                        <span className="stat-label">проектов</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-value">1</span>
                                        <span className="stat-label">месяц</span>
                                    </div>
                                </div>
                                <div className="skills__card-tags">
                                    <span className="tag">🎨 Утилиты CSS</span>
                                    <span className="tag">🖼️ Компоненты</span>
                                    <span className="tag">📐 Сетка(Grid)</span>
                                    <span className="tag">📱 Адаптивность</span>
                                    <span className="tag">🛠️ JS-компоненты</span>
                                    <span className="tag">🧩 Плагинная экосистема</span>
                                    <span className="tag">🌐 Кроссбраузерность</span>
                                </div>
                            </div>
                            <div className="skills__card">
                                <div className="skills__card-inner">
                                    <div className="skills__card-header">
                                        <img className="" src={git} alt="" />
                                        <h3>Git</h3>
                                    </div>
                                    <div className="skills__card-rating">
                                        <span className="rating-value">4.8</span>
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
                                    <div className="stat">
                                        <span className="stat-value">15</span>
                                        <span className="stat-label">проектов</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-value">2.5</span>
                                        <span className="stat-label">года</span>
                                    </div>
                                </div>
                                <div className="skills__card-tags">
                                    <span className="tag">🌳 Репозитории</span>
                                    <span className="tag">🔄 Коммиты</span>
                                    <span className="tag">🏷️ Ветки(Branches)</span>
                                    <span className="tag">🌐 GitHub/GitLab</span>
                                    <span className="tag">📜 История(Log)</span>
                                    <span className="tag">🔀 Слияние(Merge)</span>
                                    <span className="tag">🧩 Стаджинг(Stage)</span>
                                    <span className="tag">⏪ Откат(Revert/Reset)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
