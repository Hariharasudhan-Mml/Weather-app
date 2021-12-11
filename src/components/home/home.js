
import './home.css';
function Home({onchange,submit,city}){




    return(
        <div className="home">
            <h5 >Live Weather App</h5>
           <marquee> <p>world's weather report in a second</p></marquee>
            <h4> Know  the weather and then plan your day, based on this results</h4>
             <div className="content">
                 <strong>City Name:</strong>
                <input type='text' name='city' onChange={onchange} value={city} required/>
                <input type='submit' className="btn" value="get Weather" onClick={submit}  />
                </div>
        </div>
    )
}


export default Home;