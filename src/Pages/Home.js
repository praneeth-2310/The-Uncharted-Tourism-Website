import '../App.css'
import Footer from './Footer';
import Header from './Header';
import img1 from '../img/img1.png'



function Travel(){
    return(
        <div>
            <Header></Header>
            <main className="hero-section" id="hero-section">
            <div className="background">
                <img src={img1} className="background-image" alt="hero-section image"></img>
                </div>

                <div className="hero-section-content" data-aos="fade-up">
                    <h1 className="hero-section-title">wonderful experience</h1>
                    <p className="hero-section-sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </main>
            <Footer></Footer>
        </div>
        
    )
}
export default Travel;