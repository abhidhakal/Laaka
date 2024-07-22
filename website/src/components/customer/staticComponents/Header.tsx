import React, { useState, useEffect } from 'react';
import '../../styles/customer/header.css';

interface HeaderProps {
    onSectionChange: (section: string) => void;
}

function Header({ onSectionChange }: HeaderProps) {
    const [showForm, setShowForm] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const savedMode = localStorage.getItem('dark-mode');
        return savedMode === 'true' || false;
    });

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('dark-mode', isDarkMode.toString());
    }, [isDarkMode]);

    const handleGetStartedClick = () => {
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
        setIsLogin(true);
    };

    const switchToSignup = () => {
        setIsLogin(false);
    };

    const switchToLogin = () => {
        setIsLogin(true);
    };

    const navigateToPage = (section: string) => {
        onSectionChange(section);
    };

    const handleThemeSwitch = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleSignupSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const signupData = {
            username: formData.get('signup-username') as string,
            email: formData.get('signup-email') as string,
            password: formData.get('signup-password') as string,
            fullname: formData.get('fullname') as string,
            contact: formData.get('contact') as string,
            address: formData.get('address') as string,
        };

        const response = await fetch('http://localhost:8070/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupData),
        });

        if (response.ok) {
            alert('Signup successful, you can now login.');
            switchToLogin();
        } else {
            const error = await response.text();
            alert(`Signup failed: ${error}`);
        }
    };

    const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = formData.get('identifier') as string;
        const password = formData.get('password') as string;

        try {
            const response = await fetch('http://localhost:8070/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                // Check for specific username and password
                if (username === 'admin' && password === 'password') {
                    navigateToPage('admin');
                } else {
                    navigateToPage('customer');
                }
            } else {
                const error = await response.text();
                alert(`Login failed: ${error}`);
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred. Please try again.');
        }

        closeForm();
    };





    return (
        <header className="header">
            <div className="left-section">
                <img src="../public/assets/logos/logo_slogan_large.svg" alt="Laaka" onClick={() => navigateToPage('home')} />
            </div>
            <div className="mid-section">
                <p className="cats" onClick={() => navigateToPage('home')}>HOME</p>
                <p className="cats" onClick={() => navigateToPage('brands')}>BRANDS</p>
                <p className="cats" onClick={() => navigateToPage('footwear')}>FOOTWEAR</p>
                <p className="cats" onClick={() => navigateToPage('clothing')}>CLOTHING</p>
                <p className="cats" onClick={() => navigateToPage('about')}>ABOUT US</p>
            </div>
            <div className="right-section">
                <label className="theme-switch">
                    <input type="checkbox" className="checkbox" checked={isDarkMode} onChange={handleThemeSwitch} />
                    <div className="container">
                        <div className="circle-container">
                            <div className="sun-moon-container">
                                <div className="moon">
                                    <div className="spot"></div>
                                    <div className="spot"></div>
                                    <div className="spot"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </label>
                <button className="signin-btn" onClick={handleGetStartedClick}>Get Started</button>
            </div>
            {showForm && (
                <div className="auth">
                    <div className={`auth-content ${isLogin ? 'login' : 'signup'}`}>
                        <span className="close-btn" onClick={closeForm}>&times;</span>
                        {isLogin ? (
                            <>
                                <h2>Login</h2>
                                <form onSubmit={handleLoginSubmit}>
                                    <label htmlFor="identifier">Email or Username:</label>
                                    <input type="text" id="identifier" name="identifier" required />
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" id="password" name="password" required />
                                    <button type="submit">Login</button>
                                </form>
                                <p>Not a member yet? <span className="go-signup" onClick={switchToSignup}>Signup</span></p>
                            </>
                        ) : (
                            <>
                                <h2>Signup</h2>
                                <form onSubmit={handleSignupSubmit}>
                                    <label htmlFor="fullname">Full Name:</label>
                                    <input type="text" id="fullname" name="fullname" required/>

                                    <label htmlFor="contact">Contact:</label>
                                    <input type="text" id="contact" name="contact" required/>

                                    <label htmlFor="address">Address:</label>
                                    <input type="text" id="address" name="address" required/>

                                    <label htmlFor="signup-username">Username:</label>
                                    <input type="text" id="signup-username" name="signup-username" required/>

                                    <label htmlFor="signup-email">Email:</label>
                                    <input type="email" id="signup-email" name="signup-email" required/>

                                    <label htmlFor="signup-password">Password:</label>
                                    <input type="password" id="signup-password" name="signup-password" required/>

                                    <button type="submit">Signup</button>
                                </form>
                                <p>Already a member? <span className="go-signup" onClick={switchToLogin}>Login</span>
                                </p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
