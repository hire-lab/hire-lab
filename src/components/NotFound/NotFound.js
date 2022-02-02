import { Link } from "react-router-dom";
import './NotFound.css'

export default function Error() {
    return (
        <section className="errorPage">
        <article className="errorTitle">
            <h1 className="errorTitleText">4</h1>
            <h1 className="errorTitleText zero">0</h1>
            <h1 className="errorTitleText">4</h1>
        </article>
        <h3 className="errorPageText">The page you are looking for cannot be found.</h3>
        <button className="errorPageLink">
            <Link className="errorPageLinkText" to="/">Back to home</Link>
        </button>        
    </section>
    )
}