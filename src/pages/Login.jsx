import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure Toast CSS is imported
import loginImg from "../assets/login_img_1.png";
import '../styles/Login.css';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:5001/api/UserLoginRegister/VerifyLogin', {
                userName,
                password
            });

            if (response.status === 200) {
                toast.success("Logged in successfully!");
            } else {
                toast.error("Login failed. Please try again.");
            }
        } catch (error) {
            toast.error("Login failed. Invalid credentials or server error.");
            console.error("Login Error:", error.response?.data || error.message);
        }
    };

    return (
        <>
            <ToastContainer /> {/* Ensure ToastContainer is included */}
            <div className="row vh-100 d-flex align-items-center">
                <div className="col-md-6 main_div d-flex justify-content-center">
                    <img src={loginImg} className="login_img" alt="Login" />
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="p-3">
                        <h4>Sign In</h4>
                        <p>
                            Don’t have an account yet? <span className="text-primary">Sign Up</span>
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">User Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Username"
                                    required
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
