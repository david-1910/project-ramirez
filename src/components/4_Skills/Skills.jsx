import './Skills.css';

export default function Skills() {
    return (
        <>
            <section class="projects">
                <div class="container">
                    <div class="projects__inner">
                        <h2 class="projects__title font-3">Мои навыки:</h2>
                        <div class="projects__cards">
                            <div class="projects__card">
                                <div class="projects__card-header">
                                    <h3>HTML5</h3>
                                    <div class="projects__card-rating">
                                        <span class="rating-value">4.5</span>
                                        <div class="stars">
                                            <span class="star">★</span>
                                            <span class="star">★</span>
                                            <span class="star">★</span>
                                            <span class="star">★</span>
                                            <span class="star">★</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="projects__card-stats">
                                    <div class="stat">
                                        <span class="stat-value">15</span>
                                        <span class="stat-label">проектов</span>
                                    </div>
                                    <div class="stat">
                                        <span class="stat-value">2.5</span>
                                        <span class="stat-label">год</span>
                                    </div>
                                </div>
                                <div class="projects__card-tags">
                                    <span class="tag">Верстка</span>
                                    <span class="tag">Семантика</span>
                                    <span class="tag">Доступность</span>
                                </div>
                            </div>

                            <div class="projects__card">
                                <div class="projects__card-header">
                                    <h3>CSS3</h3>
                                    <div class="projects__card-rating">
                                        <span class="rating-value">4.5</span>
                                        <div class="stars">
                                            <span class="star">★</span>
                                            <span class="star">★</span>
                                            <span class="star">★</span>
                                            <span class="star">★</span>
                                            <span class="star">★</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="projects__card-stats">
                                    <div class="stat">
                                        <span class="stat-value">15</span>
                                        <span class="stat-label">проектов</span>
                                    </div>
                                    <div class="stat">
                                        <span class="stat-value">2.5</span>
                                        <span class="stat-label">года</span>
                                    </div>
                                </div>

                                <div class="projects__card-tags">
                                    <span class="tag">Flexbox</span>
                                    <span class="tag">Grid</span>
                                    <span class="tag">Bootstrap</span>
                                    <span class="tag">Tailwind CSS</span>
                                    <span class="tag">Анимации</span>
                                </div>
                            </div>

                            <div class="projects__card">
                                <div class="projects__card-header">
                                    <h3>JavaScript</h3>
                                    <div class="projects__card-rating">
                                        <span class="rating-value">4.3</span>
                                        <div class="stars">
                                            <span class="star">★</span>
                                            <span class="star">★</span>
                                            <span class="star">★</span>
                                            <span class="star">★</span>
                                            <span class="star">★</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="projects__card-stats">
                                    <div class="stat">
                                        <span class="stat-value">12</span>
                                        <span class="stat-label">проектов</span>
                                    </div>
                                    <div class="stat">
                                        <span class="stat-value">1.5</span>
                                        <span class="stat-label">года</span>
                                    </div>
                                </div>
                                <div class="projects__card-tags">
                                    <span class="tag">ES6+</span>
                                    <span class="tag">DOM</span>
                                    <span class="tag">API</span>
                                </div>
                            </div>
                            <div class="projects__card">
                                <div class="projects__card-header">
                                    <h3>React</h3>
                                    <div class="projects__card-rating">
                                        <span class="rating-value">4.0</span>
                                        <div class="stars">
                                            <span class="star">★</span>
                                            <span class="star">★</span>
                                            <span class="star">★</span>
                                            <span class="star">★</span>
                                            <span class="star">★</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="projects__card-stats">
                                    <div class="stat">
                                        <span class="stat-value">2</span>
                                        <span class="stat-label">проектов</span>
                                    </div>
                                    <div class="stat">
                                        <span class="stat-value">4</span>
                                        <span class="stat-label">месяцев</span>
                                    </div>
                                </div>
                                <div class="projects__card-tags">
                                    <span class="tag">Hooks</span>
                                    <span class="tag">Components</span>
                                    <span class="tag">State</span>
                                    <span class="tag">SPA</span>
                                    <span class="tag">Context API</span>
                                </div>
                            </div>
                            <div class="projects__card">
                                <div class="projects__card-header">
                                    <h3>Vue.js</h3>
                                    <div class="projects__card-rating">
                                        <span class="rating-value">4.1</span>
                                        <div class="stars">
                                            <span class="star">★</span>
                                            <span class="star">★</span>
                                            <span class="star">★</span>
                                            <span class="star">★</span>
                                            <span class="star">★</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="projects__card-stats">
                                    <div class="stat">
                                        <span class="stat-value">6</span>
                                        <span class="stat-label">проектов</span>
                                    </div>
                                    <div class="stat">
                                        <span class="stat-value">0.8</span>
                                        <span class="stat-label">года</span>
                                    </div>
                                </div>
                                <div class="projects__card-tags">
                                    <span class="tag">Composition API</span>
                                    <span class="tag">Vuex/Pinia</span>
                                    <span class="tag">Vue Router</span>
                                    <span class="tag">Components</span>
                                    <span class="tag">Reactivity</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
