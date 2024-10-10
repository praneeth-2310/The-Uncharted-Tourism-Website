import '../App.css';
import night from '../img/pexels-eberhardgross-640781.jpg'






function Booknow(){
    function Redirect(){
        window.location.replace('/Details')
    }
    return(
        <div className='register'>
            <div className='night'>
            <img src={night} className='sky'></img>

            </div>
            
            
        <div className='booknow'>
        <h2 className='fly'>FLY WITH US!!!</h2>
        <div className='book'>
            <div className='contain'>
                <div className='matter'>
                <p className='details'>Enter Your Name</p>
                <input type='text' className='inputs'></input>

                </div>
                <div className='matter'>
                <p className='details'>Enter Your Email</p>
                <input type='text' className='inputs'></input>

                </div>
                <div className='matter'>
                <p className='details'>Enter Phoneno</p>
                <input type='text' className='inputs'></input>

                </div>
            </div>
            <div className='contain'>
                <div className='matter'>
                <p className='details'>Enter Address</p>
                <input type='text' className='inputs'></input>
                </div>
                <div className='matter'>
                <p className='details'>Enter City</p>
                <input type='text' className='inputs'></input>

                </div>
                <div className='matter'>
                <p className='details'>Enter State</p>
                <input type='text' className='inputs'></input>
                </div>
            </div>
            <div className='contain'>
                <div className='matter'>
                <p className='details'>Enter Country</p>
                <input type='text' className='inputs'></input>
                </div>
                <div className='matter'>
                <p className='details'>Enter Departure</p>
                <input type='text' className='inputs'></input>
               
                </div>
                <div className='matter'>
                <p className='details'>Enter Destination</p>
                <input type='text' className='inputs'></input>
                </div>
            </div>
            <div className='button'>
            <button type='submit' className='Continue' onClick={()=>Redirect()}>Continue</button>

            </div>

            
            <p className='detail'> Thank you for booking slot our team members will contact you soon</p>
            
        </div>
        </div>
        </div>
    )

}
export default Booknow;