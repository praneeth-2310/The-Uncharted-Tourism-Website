import '../App.css'
import logo from '../img/uncharted.png'
import Header from './Header';
import beach from '../img/pexels-fabianwiktor-994605 (1).jpg'



function Logo(){
    function Book(){
        window.location.replace('/Booknow')
    }
    return(
        <div className='info'>
            <div className='headers'>
            <Header></Header>
            <img src={beach} className='beach'></img>
            </div>
            <div className='aboutus'>
                <div className='image'>
                    <img src={logo} className='uncharted'></img>
                </div>
                <div className='about'>
                   <div>
                   <h2>ABOUT US</h2>
                    <p><b>The Uncharted, we believe that travel is more than just a journey from one place to another – it's an experience that enriches the soul and broadens the mind. Established in 2023, we have been dedicated to crafting unforgettable travel experiences for explorers from all walks of life.</b></p>
                    <h2>OUR MISSION</h2>
                    <p><b>Our mission is to inspire and enable people to explore the world with confidence and joy. We strive to provide personalized, high-quality travel services that cater to the unique needs and preferences of each traveler. Whether you're seeking a relaxing beach getaway, an adventurous mountain trek, or a cultural city tour, we've got you covered.</b></p>
                   </div>
                </div>
            </div>
            <div className='destination'>
                <div className='your'>
                <h2>Enter YOUR DESTINATION</h2>

                </div>
                <div className='select'>
                <input type='text' className='dest'></input>
                <button type='submit' className='lets' onClick={()=>Book()}>Let's go</button>
                </div>
                
            </div>

        </div>
    )
}
export default Logo;