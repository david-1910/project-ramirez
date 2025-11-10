import './Intro.css';

export default function Intro() {
    return (
        <>
            <section className="section__intro intro">
                <div className="container">
                    <div className="intro__inner">
                        <h1 className="intro__title font-3">Привет, я Ramzes <span className="wave">👋</span></h1>
                        <p className="intro__subtitle font-5">
                            <span className="intro__typed" aria-live="polite"></span>
                            <span className="intro__cursor" aria-hidden="true"></span>
                        </p>
                    </div>
                </div>
                <div className="intro__gradient"></div>
                <ul className="circles">
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
