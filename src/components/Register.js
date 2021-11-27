import { Link } from "react-router-dom";

export default function Register() {
    return (
        <section id="register">
            <div className="row space-top">
                <div className="col-md-12">
                    <h1>Register New User</h1>
                    <p>Please fill all fields.</p>
                </div>
            </div>
            <div className="form-wrapper">
              <form >
                <div className="row space-top">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="email">Email</label>
                            <input className='form-control' id="email" type="text" name="email" />
                        </div>
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="password">Password</label>
                            <input className='form-control' id="password" type="password" name="password" />
                        </div>
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="rePass">Repeat</label>
                            <input className='form-control' id="rePass" type="password" name="rePass" />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Register" />
                    </div>
                </div>
              </form>

            </div>
            <p className="field">
                <span>Already part of the team? Click <Link to="/login">here</Link></span>
            </p>
        </section>
    )
}