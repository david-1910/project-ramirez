import './About.css';

export default function About() {
    return (
        <>
            <section class="about">
                <div class="container">
                    <h2 class="about__title font-3">Обо мне</h2>
                    <p class="about__subtitle">Frontend & Backend разработчик с страстью к созданию красивых интерфейсов</p>

                    <div class="about__content">
                        <div class="about__image-wrapper">
                            <div class="about__image-bg"></div>
                            <div class="about__image">
                                <img src="./img/profile.jpg" alt="Ramzes - Frontend Developer" draggable="false"></img>
                            </div>
                        </div>

                        <div class="about__text">
                            <p>
                                Привет! Я <strong>Довуд</strong> — веб-разработчик с опытом создания современных и
                                функциональных веб-приложений.
                                Моя страсть — превращать идеи в реальность через код.
                            </p>
                            <p>
                                Специализируюсь на <strong>Frontend-разработке</strong> с использованием HTML5, CSS3,
                                JavaScript, React и Vue.js.
                                Также имею опыт работы с Backend-технологиями, что позволяет мне создавать полноценные
                                веб-решения.
                            </p>
                            <p>
                                Я постоянно изучаю новые технологии и следую современным трендам веб-разработки.
                                Верю, что качественный код и внимание к деталям — ключ к успешному проекту.
                            </p>
                        </div>
                    </div>

                    <div class="about__stats">
                        <div class="stat-card">
                            <div class="stat-card__number">1.5+</div>
                            <div class="stat-card__label">Лет опыта</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-card__number">25+</div>
                            <div class="stat-card__label">Проектов завершено</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-card__number">15+</div>
                            <div class="stat-card__label">Довольных клиентов</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-card__number">100%</div>
                            <div class="stat-card__label">Качество кода</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
