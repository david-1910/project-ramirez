import './Skills.css';

export default function Skills() {
    return (
        <>
            <section className="projects">
                <div className="container">
                    <div className="projects__inner">
                        <h2 className="projects__title font-3">Мои навыки:</h2>
                        <div className="projects__cards">
                            <div className="projects__card">
                                <div className="projects__card-header">
                                    <h3>HTML5</h3>
                                    <div className="projects__card-rating">
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
                                <div className="projects__card-stats">
                                    <div className="stat">
                                        <span className="stat-value">15</span>
                                        <span className="stat-label">проектов</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-value">2.5</span>
                                        <span className="stat-label">год</span>
                                    </div>
                                </div>
                                <div className="projects__card-tags">
                                    <span className="tag">Верстка</span>
                                    <span className="tag">Семантика</span>
                                    <span className="tag">Доступность</span>
                                </div>
                            </div>

                            <div className="projects__card">
                                <div className="projects__card-header">
                                    <h3>CSS3</h3>
                                    <div className="projects__card-rating">
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

                                <div className="projects__card-stats">
                                    <div className="stat">
                                        <span className="stat-value">15</span>
                                        <span className="stat-label">проектов</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-value">2.5</span>
                                        <span className="stat-label">года</span>
                                    </div>
                                </div>

                                <div className="projects__card-tags">
                                    <span className="tag">Flexbox</span>
                                    <span className="tag">Grid</span>
                                    <span className="tag">Bootstrap</span>
                                    <span className="tag">Tailwind CSS</span>
                                    <span className="tag">Анимации</span>
                                </div>
                            </div>

                            <div className="projects__card">
                                <div className="projects__card-header">
                                    <h3>JavaScript</h3>
                                    <div className="projects__card-rating">
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
                                <div className="projects__card-stats">
                                    <div className="stat">
                                        <span className="stat-value">12</span>
                                        <span className="stat-label">проектов</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-value">1.5</span>
                                        <span className="stat-label">года</span>
                                    </div>
                                </div>
                                <div className="projects__card-tags">
                                    <span className="tag">ES6+</span>
                                    <span className="tag">DOM</span>
                                    <span className="tag">API</span>
                                </div>
                            </div>
                            <div className="projects__card">
                                <div className="projects__card-header">
                                    <h3>React</h3>
                                    <div className="projects__card-rating">
                                        <span className="rating-value">4.0</span>
                                        <div className="stars">
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="projects__card-stats">
                                    <div className="stat">
                                        <span className="stat-value">2</span>
                                        <span className="stat-label">проектов</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-value">4</span>
                                        <span className="stat-label">месяцев</span>
                                    </div>
                                </div>
                                <div className="projects__card-tags">
                                    <span className="tag">Hooks</span>
                                    <span className="tag">Components</span>
                                    <span className="tag">State</span>
                                    <span className="tag">SPA</span>
                                    <span className="tag">Context API</span>
                                </div>
                            </div>
                            <div className="projects__card">
                                <div className="projects__card-header">
                                    <h3>Vue.js</h3>
                                    <div className="projects__card-rating">
                                        <span className="rating-value">4.1</span>
                                        <div className="stars">
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="projects__card-stats">
                                    <div className="stat">
                                        <span className="stat-value">6</span>
                                        <span className="stat-label">проектов</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-value">0.8</span>
                                        <span className="stat-label">года</span>
                                    </div>
                                </div>
                                <div className="projects__card-tags">
                                    <span className="tag">Composition API</span>
                                    <span className="tag">Vuex/Pinia</span>
                                    <span className="tag">Vue Router</span>
                                    <span className="tag">Components</span>
                                    <span className="tag">Reactivity</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
