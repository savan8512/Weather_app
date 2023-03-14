import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import { BsSunFill, BsSun } from "react-icons/bs";
import './App.css';

function App() {


  const apiKey = "f56f24967aaf51182d1d4df628297c6d"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})
  const [status, setstatus] = useState(false)



  const getWetherDetails = async (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
      setstatus(true);
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
  }

  if(status)
  {
    return (
      <div>
        <div>
          <div className="container">
            <div className="weather-side">
              <div className="weather-gradient" />
                <div className="date-container">
                  <h2 className="date-dayname">{data?.name}, {data?.sys?.country}</h2>
                </div>
                <div className="weather-container"><i className="weather-icon" data-feather="sun" />
                  <h1 className="weather-temp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h1>
                  {/* description call nathi thatu */}
                 <h3 className="weather-desc">{data.weather[0].description}</h3>
                </div>
             </div>
            <div className="info-side">
              <div className="today-info-container">
                <div className="today-info">
                  <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{data?.main?.humidity}</span>
                    <div className="clear" />
                  </div>
                  <div className="wind"> <span className="title">WIND</span><span className="value">{data?.wind?.speed}km/h</span>
                    <div className="clear" />
                  </div>
                  <div className="wind"> <span className="title">Deg</span><span className="value">{data?.wind?.deg}</span>
                    <div className="clear" />
                  </div>
                </div>
              </div>
              <div className="week-container">
                <ul className="week-list">
                  <li className="active"><BsSunFill className="day-icon" /><span className="day-name">Max</span>
                    <span className="day-temp">{((data?.main?.temp_max) - 273.15).toFixed(2)}°C</span></li>
  
                  <li><BsSun className="day-icon" /><span className="day-name">Min</span>
                    <span className="day-temp">{((data?.main?.temp_min) - 273.15).toFixed(2)}°C</span></li>
  
                  <li><i className="day-icon" data-feather="cloud-snow" /><span className="day-name">Thu</span>
                    <span className="day-temp">08°C</span></li>
  
                  <li><i className="day-icon" data-feather="cloud-rain" /><span className="day-name">Fry</span>
                    {/* <span className="day-temp">{data.weather[0].description}</span> */}
                    </li>
  
                  <div className="clear" />
                </ul>
              </div>
              <div className="location-container ">
                {/* <button className="location-button"> <i data-feather="map-pin" /><span>Change location</span></button> */}
                <input type="text" className="form-control"
                placeholder="Enter city name.."
                  value={inputCity}
                  onChange={handleChangeInput} />
                {/* <button className="location-button-1"> <i data-feather="map-pin" /><span>Search</span></button> */}
                <button className="location-button-1" type="button" onClick={handleSearch}>Search</button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
  else{
    return (
      <div>
        <div>
          <div className="container">
            <div className="weather-side">
              <div className="weather-gradient" />
                <div className="date-container">
                  <h2 className="date-dayname">{data?.name}, {data?.sys?.country}</h2>
                </div>
                <div className="weather-container"><i className="weather-icon" data-feather="sun" />
                  <h1 className="weather-temp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h1>
                  {/* description call nathi thatu */}
                 {/* <h3 className="weather-desc">{data.weather[0].description}</h3> */}
                </div>
             </div>
            <div className="info-side">
              <div className="today-info-container">
                <div className="today-info">
                  <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{data?.main?.humidity}</span>
                    <div className="clear" />
                  </div>
                  <div className="wind"> <span className="title">WIND</span><span className="value">{data?.wind?.speed}km/h</span>
                    <div className="clear" />
                  </div>
                  <div className="wind"> <span className="title">Deg</span><span className="value">{data?.wind?.deg}</span>
                    <div className="clear" />
                  </div>
                </div>
              </div>
              <div className="week-container">
                <ul className="week-list">
                  <li className="active"><BsSunFill className="day-icon" /><span className="day-name">Max</span>
                    <span className="day-temp">{((data?.main?.temp_max) - 273.15).toFixed(2)}°C</span></li>
  
                  <li><BsSun className="day-icon" /><span className="day-name">Min</span>
                    <span className="day-temp">{((data?.main?.temp_min) - 273.15).toFixed(2)}°C</span></li>
  
                  <li><i className="day-icon" data-feather="cloud-snow" /><span className="day-name">Thu</span>
                    <span className="day-temp">08°C</span></li>
  
                  <li><i className="day-icon" data-feather="cloud-rain" /><span className="day-name">Fry</span>
                    {/* <span className="day-temp">{data.weather[0].description}</span> */}
                    </li>
  
                  <div className="clear" />
                </ul>
              </div>
              <div className="location-container ">
                {/* <button className="location-button"> <i data-feather="map-pin" /><span>Change location</span></button> */}
                <input type="text" className="form-control"
                placeholder="Enter city name.."
                  value={inputCity}
                  onChange={handleChangeInput} />
                {/* <button className="location-button-1"> <i data-feather="map-pin" /><span>Search</span></button> */}
                <button className="location-button-1" type="button" onClick={handleSearch}>Search</button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }

 
  }


 

export default App;
