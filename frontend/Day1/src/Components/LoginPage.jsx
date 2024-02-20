import { useState } from 'react';
import './LoginPage.css'; 

function LoginPage() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let errors = [];

       
        if (password.length < 6) {
            errors.push('Password should be at least 6 characters long');
        }

       
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(username)) {
            errors.push('Please enter a valid Email address');
        }

        if (errors.length > 0) {
            setErrorMessage(errors.join(', '));
            return;
        }

        
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <h1>LOGIN</h1>
            <div className="login-box">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Email"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <input type="submit" value="Login" />
                </form>
            </div>
            <p className="register-link">Dont have an account? <a href="/register">Register here</a></p>
        </div>
    );
}
export default LoginPage;
