import '../App.css';
import logo from '../img/uncharted.png'




function Header(){
    return(
        <div>
            <header>
    <nav className="navbar">
        <ul className="links-container">
            <li className="link-item"><a href="/Home">Travel</a></li>
            <li className="link-item"><a href="/Explore">Explore</a></li>
            <li className="link-item"><a href="/Info"><img src={logo}className="logo" alt=""></img></a></li>
            <li className="link-item"><a href="/Service">Services</a></li>
            <li className="link-item"><a href="#booknow">Book Now</a></li>
        </ul>
    </nav>
</header>
        </div>
    )
};
export default Header;