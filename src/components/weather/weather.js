
import './weather.css';

function Weather({temp , desc ,icon ,city}){

    const url="http://openweathermap.org/img/w/" +icon+ ".png";
    return(
        <div className="weather">
            <h1 className="title">The weather is currently {desc}</h1>
            <h3>The temperature in {city} is {temp} &deg;C</h3>

            <img src={url}  alt="cloud icon"/>
            <a href="/" className="back">Back</a>
        </div>
        )
}


export default Weather;