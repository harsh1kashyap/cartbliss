import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import loginImg from "../assets/login_img_1.png";
import '../styles/Login.css'


var Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://localhost:5001/api/UserLoginRegister/VerifyLogin', { userName: userName, password: password })
            .then(function (response) {
                toast.success("Logged In Successfully.");
            })
            .catch(function (response) {
                console.log(response);
            })
    }

    return (
        <>
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
    )
}

export default Login;