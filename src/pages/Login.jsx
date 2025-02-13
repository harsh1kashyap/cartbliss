import loginImg from "../assets/login_img_1.png";
import '../styles/Login.css'

var Login = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-6 main_div d-flex justify-content-center">
                    <img src={loginImg} className="login_img"></img>
                </div>
                <div className="col-md-6">
                    <div className="card p-4 shadow-lg login_form">
                        <h4>Sign In</h4>
                        <p>Don’t have an accout yet? <span>Sign Up</span></p>
                        <div>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">User Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Username"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    Sign In
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;