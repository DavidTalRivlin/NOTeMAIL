import { AboutHeader } from "../cmps/AboutHeader.jsx";

export function About() {
    return <section className="about">
        <AboutHeader />
        <h2 className="about-sentance">We are ABOUT to do this page.........</h2>
        <div className="about-imgs">
            <img src="./assets/img/David.png" alt="" />
            <img src="./assets/img/amir.png" alt="" />
        </div>
    </section>
}
