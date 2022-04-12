
import { useEffect, useState } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Weather from './components/Weather/Weather';

const API_KEY = '4370654eb8fa4440665838d482b98621'

function App() {
  const [allData, setAllData] = useState('')
  const[error,setError] = useState(true);

  const getWeather = async (city) => {

      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      const data = await api_url.json();
      setAllData(data);
 

  }

  const bacCol =  {
        'Clouds': 'rgba(59, 170, 205, 0.26)',
        'Clear':'rgba(186, 190, 0, 0.32)',
        'Rain':'rgba(123, 176, 255, 0.26)',
        'thunderstorm':'rgba(84, 128, 141, 0.26)',
        'snow':'rgba(62, 181, 249, 0.51)',
        'mist':'rgba(84, 128, 141, 0.26)',
        'Haze': 'rgba(84, 128, 141, 0.26)'       


    } 
    

  useEffect(()=>{
    if(allData){
      const strData = allData.weather[0].main 
      document.body.style.background = bacCol[strData];

    }
  },[allData])
  
  return (
    <div className="App">
      <Input getWeather = {getWeather}/>
      {allData ? <Weather allData={allData}/> : null}
    </div>
  );
}

export default App;

// https://api.openweathermap.org/data/2.5/weather?q=london&appid=4370654eb8fa4440665838d482b98621 