import './Footer.css'

export default function Footer () {
    return (
        <footer className="footer">
        <h5 className="footerTitle">Hire Lab</h5>
        <ul className="footerLinks">
            <li className="footerLink"><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li className="footerLink"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li className="footerLink"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
        <span className="footerCopyright">&copy; Copyright Zlatina Moga 2021</span>
    </footer>
    )
}