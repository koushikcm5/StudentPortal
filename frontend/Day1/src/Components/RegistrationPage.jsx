import { useState } from 'react';
import './RegistrationPage.css'; // Importing CSS file for styling

function RegistrationPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [role, setRole] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleMobileNumberChange = (event) => {
        const value = event.target.value;
        if (/^\d{0,10}$/.test(value)) {
            setMobileNumber(value);
            if (value.length === 10) {
                setErrorMessage('');
            } else {
                setErrorMessage('Mobile number should contain exactly 10 digits');
            }
        }
    };

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        if (mobileNumber.length !== 10) {
            setErrorMessage('Mobile number should contain exactly 10 digits');
            return;
        }

        // Proceed with registration logic here
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
        console.log('Mobile Number:', mobileNumber);
        console.log('Role:', role);
    };

    return (
        <div className="registration-container">
            <h1>REGISTRATION</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="mobileNumber">Mobile Number:</label>
                    <input
                        type="text"
                        id="mobileNumber"
                        placeholder="Enter your mobile number"
                        value={mobileNumber}
                        onChange={handleMobileNumberChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="role">Role:</label>
                    <select id="role" value={role} onChange={handleRoleChange} required>
                        <option value="">Select Role</option>
                        <option value="student">Student</option>
                        <option value="admin">Admin</option>
                        <option value="officeStaff">Office Staff</option>
                    </select>
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <input type="submit" value="Register" className="submit-button" />
            </form>
        </div>
    );
}

export default RegistrationPage;
