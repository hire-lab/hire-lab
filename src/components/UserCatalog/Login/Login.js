import { Link } from "react-router-dom";
import './Login.css'

export default function Login() {
    return (
        <section className="loginPage">
            <article>
                 <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </article>

             <form className="loginForm">
                <div className="row space-top">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="email">Email</label>
                            <input className="form-control" id="email" type="text" name="email" placeholder="maria.ivanova@company.com" />
                        </div>
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="password">Password</label>
                            <input className="form-control" id="password" type="password" name="password" placeholder="****" />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Login" />
                        <p className="field">
                            <span>New to the team? Click <Link to="/register">here</Link></span>
                        </p>
                    </div>
                </div>
            </form>
        </section>
    )
}