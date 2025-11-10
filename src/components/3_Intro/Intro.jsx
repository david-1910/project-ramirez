import './Intro.css';

export default function Intro() {
    return (
        <>
            <section class="section__intro intro">
                <div class="container">
                    <div class="intro__inner">
                        <h1 class="intro__title font-3">Привет, я Ramzes <span class="wave">👋</span></h1>
                        <p class="intro__subtitle font-5">
                            <span class="intro__typed" aria-live="polite"></span>
                            <span class="intro__cursor" aria-hidden="true"></span>
                        </p>
                    </div>
                </div>
                <div class="intro__gradient"></div>
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
        </>
    );
}
