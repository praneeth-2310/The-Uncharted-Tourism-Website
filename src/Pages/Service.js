import '../App.css'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import img4 from '../img/img4.png'
import img5 from '../img/img5.png'
import img6 from '../img/img6.png'
import australia from '../img/australia.png'
import india from '../img/india.png'
import maldives from '../img/maldives.png'
import dubai from '../img/dubai.png'
import italy from '../img/italy.png'
import paris from '../img/paris.png'
import Header from './Header'
import Footer from './Footer'




function Service(){
    return(
        <div>
            <Header></Header>
            <section class="services-section" id="services">
    <h1 className="section-title" data-aos="fade-up">Why Us ?</h1>
    <p className="section-para" data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

    <div className="serives-grid">
        <div className="service-card" data-aos="fade-up">
            <div className="circle"></div>
            <i className="fa-solid fa-earth-americas card-icon"></i>
            <p className="service-text">We are based all over the world</p>
        </div>
        <div className="service-card" data-aos="fade-up">
            <div className="circle"></div>
            <i className="fa-solid fa-coins card-icon"></i>
            <p className="service-text">Travel the World,Without thinking</p>
        </div>
        <div className="service-card" data-aos="fade-up">
            <div className="circle"></div>
            <i className="fa-solid fa-book-open card-icon"></i>
            <p className="service-text">Get to know about local cultures</p>
        </div>
        <div className="service-card" data-aos="fade-up">
            <div className="circle"></div>
            <i className="fa-solid fa-person-snowboarding card-icon"></i>
            <p className="service-text">Have you best experience</p>
        </div>
    </div>

    <div className="bg-circle"></div>

    <div className="travel-grid" id="travel">
        <img src={img1} data-aos="fade-up" alt=""></img>
        <img src={img2} data-aos="fade-up" alt=""></img>
        <img src={img3} data-aos="fade-up" alt=""></img>
        <img src={img4} data-aos="fade-up" alt=""></img>
        <img src={img5} data-aos="fade-up" alt=""></img>
        <img src={img6} data-aos="fade-up" alt=""></img>
        <img src={australia} data-aos="fade-up" alt=""></img>
        <img src={dubai} data-aos="fade-up" alt=""></img>
        <img src={maldives} data-aos="fade-up" alt=""></img>
        <img src={paris} data-aos="fade-up" alt=""></img>
        <img src={india} data-aos="fade-up" alt=""></img>
        <img src={italy} data-aos="fade-up" alt=""></img>
    </div>

</section>
<Footer></Footer>
        </div>
    )
}
export default Service;