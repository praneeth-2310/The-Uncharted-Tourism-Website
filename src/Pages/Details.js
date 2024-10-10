import '../App.css';
import mount from '../img/pexels-sergei-a-1322276-2589456.jpg';
import Header from './Header';



function Details(){
    return(
        <div>
        <div className='pay'>
            <Header></Header>
        </div>
        <div className='payment'>
                <h2>Details</h2>
                <p><b> Name: </b> </p>
                <p><b>Phoneno: </b></p>
                <p><b>Email:</b> </p>
                <p><b>From:</b></p>
                <p><b>To: </b></p>
                <p><b>Minimum Required Days:</b> </p>
                <p><b>Places to Visit:</b> </p>
                <p><b>Total Cost:</b> </p>
            </div>
        </div>
    )
}
export default Details;