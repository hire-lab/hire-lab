import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import * as CompanyService from '../../../services/CompanyService';
import  {AuthCompanyContext} from '../../../contexts/AuthCompanyContext';
import { useNotificationContext, types } from "../../../contexts/NotificationContext";

export default function CompanyLogin() {
    const history = useHistory();
    const {login} = useContext(AuthCompanyContext);
    const {addNotification} = useNotificationContext()

    const onLoginHandler = (e) => {
        e.preventDefault();

        let {email, password} = Object.fromEntries(new FormData(e.currentTarget))
        
        CompanyService.login(email, password)
            .then((authData) => {
                login(authData)
                addNotification('You logged in successfully', types.success)
                history.push('/jobs')
            })
            .catch(err => {
                addNotification(err, types.error)
                console.log(err)
            })
    }

    return (
        <section className="loginPage">
            <article className="loginPageTitle">
                 <h1>Login Company</h1>
            </article>

             <form className="loginForm" onSubmit={onLoginHandler} method="POST">
                    <div className="loginFormField">
                        <label className="loginFormFieldLabel" htmlFor="email">Email</label>
                        <input className="loginFormFieldInput" id="email" type="text" name="email" placeholder="company@company.com" />
                    </div>
                    <div className="loginFormField">
                        <label className="loginFormFieldLabel" htmlFor="password">Password</label>
                        <input className="loginFormFieldInput" id="password" type="password" name="password" placeholder="****" />
                    </div>
                    <input type="submit" className="loginBtn" value="Login" />
                    <p className="field">
                        <span>Don't have an account? Click <Link className="linkBtn" to="/register">here</Link></span>
                    </p>
            </form>
        </section>
    )
}