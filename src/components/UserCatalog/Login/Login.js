import { useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import * as userService from '../../../services/UserService';
import  {AuthContext} from '../../../contexts/AuthContext';
import './Login.css'

export default function Login() {
    const {login} = useContext(AuthContext);
    const history = useHistory();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let {email, password} = Object.fromEntries(new FormData(e.currentTarget))
        
        userService.login(email, password)
            .then((authData) => {
                login(authData)
                history.push('/jobs')
            })
            .catch(err => {
                //add show notification
                console.log(err)
            })
    }

    return (
        <section className="loginPage">
            <article>
                 <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </article>

             <form className="loginForm" onSubmit={onLoginHandler} method="POST">
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