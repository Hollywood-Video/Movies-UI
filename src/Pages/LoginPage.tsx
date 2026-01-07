import type { FC } from "react";
import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import "./LoginPage.css";

export const LoginPage: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
    };

    return (
        <main className="login-page">
            <div className="login-container">
                <div className="login-card">
                    <h1 className="login-title">Welcome Back</h1>
                    <p className="login-subtitle">Sign in to your Cinedex account</p>

                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="form-input"
                                required
                            />
                        </div>

                        <button type="submit" className="login-button">
                            Sign In
                        </button>
                    </form>

                    <div className="login-footer">
                        <p className="signup-prompt">
                            Don't have an account? <Link to="/" className="signup-link">Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};
