export default function Login() {
    return (
        <section id="login">
            <article>
                 <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </article>

             <form>
                <div className="row space-top">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="form-control-label" for="email">Email</label>
                            <input className="form-control" id="email" type="text" name="email" />
                        </div>
                        <div className="form-group">
                            <label className="form-control-label" for="password">Password</label>
                            <input className="form-control" id="password" type="password" name="password" />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Login" />
                    </div>
                </div>
            </form>
        </section>
    )
}