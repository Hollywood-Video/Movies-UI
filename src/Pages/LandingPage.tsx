import type { FC } from "react";
import { useEffect } from 'react';
import { API_BASE_URL } from '../services/AppSettings.ts'
import "./Cinedex.css";

const LandingPage: FC = () => {
    useEffect(() => {
        fetch(`${API_BASE_URL}/movies`)
            .then((response) => response.json())
            .then(data  => {
                console.log("Movies data:", data);
            })
            .catch(error => {
                console.error("Error fetching movies data:", error);
            });
    }, []);

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