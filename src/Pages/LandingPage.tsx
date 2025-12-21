import type { FC } from "react";
import "./Cinedex.css";

const LandingPage: FC = () => {
    return (
        <main className="landing">
            <section className="hero">
                <h1 className="title">Cinedex</h1>
                <p className="tagline">
                    Your personal movie universe.
                </p>

                <p className="description">
                    Track movies you love, discover new ones, and build your own cinematic
                    collection — all in one place.
                </p>

                <div className="actions">
                    <button className="primary">Get Started</button>
                    <button className="secondary">Coming Soon</button>
                </div>
            </section>

            <footer className="footer">
                © {new Date().getFullYear()} Cinedex
            </footer>
        </main>
    );
};

export default LandingPage;