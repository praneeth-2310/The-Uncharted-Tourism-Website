import '../App.css'
import book from '../img/book.png'
import logo from '../img/logo.png'


function Footer(){
    return(
        <div>
            <section className="book-section" id="booknow">
    <div className="book-content" data-aos="fade-up">
        <h1 className="book-now-title">Book your travel today</h1>
        <p className="book-now-text">Give yourself and your family a peacfull and wonderful vacation this holiday</p>

       <a href='/Info'><button className="book-now">book now</button></a> 
    </div>
    <div className="bg-circle-2"></div>
    <img src={book} data-aos="fade-up" className="book-now-img" alt=""></img>
</section>


<footer className="footer">
    <img src={logo} className="footer-logo" alt=""></img>
    <div className="footer-text">
        <p>Travel the world, on this holiday</p>
        <p>Email - support@travel.com</p>
        <p>Phone - 99 88 776655, 99 88 776644</p>
    </div>
    <p className="copyright-line">This design is a concept design.</p>
</footer>

        </div>
    )
}
export default Footer;