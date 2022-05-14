import React, { useState } from "react";
import axios from 'axios';
import Background from './backgroundComponent';


function App() {
  

  const [location,setLocation] = useState('')
  const [data,setData] = useState({})
 
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=681134f49a40ffa25a43fd6bd3a2f480`

  const searchLocation = (event) => {
      if(event.key === 'Enter') {
        axios.get(apiUrl + "&units=metric")
          .then((response) => {
          setData(response.data)
          console.log(response.data)
        })
      }
  }

  return (
    <div className="app">

      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress = {searchLocation}
        placeholder='Enter Location'
        type="text"/>
      </div>


      <div className="container">   

      
        <div>
            <Background weatherDescription={data.weather ? <p>{data.weather[0].main}</p> : console.log("false")}/>
        </div>

        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name != undefined && 
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null} 
              <p>Humidity</p>
              <p></p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed.toFixed()} KPH</p> : null} 
              <p>Wind Speed</p>
            </div>
          </div>
        }

      </div>

    </div>
  );
}

export default App;
