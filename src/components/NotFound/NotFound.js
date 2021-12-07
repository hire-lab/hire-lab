import { Link } from "react-router-dom";
import './NotFound.css'

export default function Error() {
    return (
        <section class="errorPage">
        <article  class="errorTitle">
            <h1 class="errorTitleText">4</h1>
            <h1 class="errorTitleText zero">0</h1>
            <h1 class="errorTitleText">4</h1>
        </article>
        <h3 class="errorPageText">The page you are looking for cannot be found.</h3>
        <button class="errorPageLink">
            <Link class="errorPageLinkText" to="/">Back to home</Link>
        </button>        
    </section>
    )
}