import './Footer.css'

export default function Footer () {
    return (
        <footer className="footer">
        <h5 className="footerTitle">Hire Lab</h5>
        <span className="footerInfoWrapper">  
            <p>email@email.com</p>
            <p>+000000000000</p>
        </span>
       
        <ul className="footerLinks">
            <li className="footerLink"><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li className="footerLink"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li className="footerLink"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
        <span className="footerCopyright">&copy; <a href='https://github.com/zlatina-moga' target='_blank'>Zlatina Moga</a></span>
    </footer>
    )
}