import React, { useState } from 'react';

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!e.target.value.endsWith('.ru')) {
            setEmailError('Yalnız .ru domenlərinə icazə verilir.');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError('Ən azı 8 simvol.');
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Burada formun göndərilməsi əməliyyatları yerinə yetirilə bilər
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">E-mail:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                {emailError && <p className="error-message">{emailError}</p>}
            </div>
            <div>
                <label htmlFor="password">Parol:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                {passwordError && <p className="error-message">{passwordError}</p>}
            </div>
            <button className="submit-button" type="submit">Daxil ol</button>
        </form>
    );
};

export default UserLogin;
