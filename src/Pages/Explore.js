import '../App.css'
import italy from '../img/italy.png'
import india from '../img/india.png'
import australia from '../img/australia.png'
import maldives from '../img/maldives.png'
import dubai from '../img/dubai.png'
import paris from '../img/paris.png'
import Header from './Header'
import Footer from './Footer'


function Explore(){
    function Paris(){
        window.location.replace('/Paris')
    }
    return(
        <div>
            <Header></Header>
            <div className="explore-section" id="explore-section">
    <h1 className="section-title" data-aos="fade-up">Explore the world</h1>
    <p className="section-para" data-aos="fade-up">"Embark on a journey of discovery and adventure, where every destination tells a new story. Explore the world with us and create unforgettable memories at every turn."</p>


    <div className="tours-container">
        <div className="tour-card" data-aos="fade-up">
            <img src={australia} className="tour-img" alt="tour-image"></img>
            <div className="tour-body">
                <h3 className="tour-name">Australia</h3>
                <p className="tour-action">View city</p>
            </div>
        </div>

        <div className="tour-card" data-aos="fade-up">
            <img src={maldives} className="tour-img" alt="tour-image"></img>
            <div className="tour-body">
                <h3 className="tour-name">Maldives</h3>
                <p className="tour-action">View city</p>
            </div>
        </div>

        <div className="tour-card" data-aos="fade-up" onClick={()=>Paris()}>
            <img src={paris} className="tour-img" alt="tour-image"></img>
            <div className="tour-body">
                <h3 className="tour-name">Paris</h3>
                <p className="tour-action">View city</p>
            </div>
        </div>

        <div className="tour-card" data-aos="fade-up">
            <img src={dubai} className="tour-img" alt="tour-image"></img>
            <div className="tour-body">
                <h3 className="tour-name">Dubai</h3>
                <p className="tour-action">View city</p>
            </div>
        </div>

        <div className="tour-card" data-aos="fade-up">
            <img src={india} className="tour-img" alt="tour-image"></img>
            <div className="tour-body">
                <h3 className="tour-name">India</h3>
                <p className="tour-action">View city</p>
            </div>
        </div>

        <div className="tour-card" data-aos="fade-up">
            <img src={italy} className="tour-img" alt="tour-image"></img>
            <div className="tour-body">
                <h3 className="tour-name">Italy</h3>
                <p className="tour-action">View city</p>
            </div>
        </div>
    </div>
</div>
<Footer></Footer>
        </div>
    )
    
}
export default Explore;