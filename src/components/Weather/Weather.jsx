import { RiCelsiusLine } from 'react-icons/ri';
import clouds from "./img/cloudy.png";
import mist from './img/mist.png';
import rain from "./img/rain.png";
import snow from "./img/snow.png";
import sunny from "./img/sun.png";
import thunderstorm from "./img/thunderstorm.png";
import './Weather.css';






const Weather = ({allData}) => {
    const s = {clouds, rain, snow, sunny, thunderstorm, mist}

    const intoStr = (str) => {
        switch(str){
            case 'Clouds': 
                return clouds;
            case 'Clear':
                return sunny;
            case 'Rain':
                return rain;
            case 'thunderstorm':
                return thunderstorm;
            case 'snow':
                return snow;
            case 'mist':
                return mist;
            case 'Haze':
                return mist;            


        } 
    }
    if(allData){
        return(
            <>
            <div className="WeatherBlock">
               
                <img src={intoStr(allData.weather[0].main)} className="WeatherIcon"></img>
        
                <p className="WeatherStatus">{allData.weather[0].main}</p>
                <h1 className="WeatherTemp">{Math.round(allData.main.temp - 273)} <RiCelsiusLine className='RiCelsiusLine'/></h1>
                
            </div>
            {/* <p className="Sunset">Sunset:{allData.sys.sunset}</p> */}
            </>
    
        )

    }

    return(
        <p className='Loading'>Loading...</p>
    )
    
}
export default Weather;