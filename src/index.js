import React from 'react';
import ReactDOM from 'react-dom';
// import './styles.css';
import { useState } from 'react';
import axios from "axios";

const Weather =  () => {
  const [weatherData, setWeatherData] = useState({});
  const [cityName, setCityName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hiii")
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=e0f99c494c2ce394a18cc2fd3f100543`)
    .then(response => {
      console.log("response", response.data);
      setWeatherData(response.data)
    })
    .catch(err => {
      console.log("error",err)
    })

  };


return (
  <div>
    <form onSubmit={submitHandler}>
      <input type="text" placeholder='enter your city name' onChange={(e)=>{setCityName(e.target.value)}}/>
      <button type="submit">Get weather</button>
    </form>
    <div>Temperature: {weatherData.main}</div>
  </div>
        )
};


ReactDOM.render(<Weather/>,document.querySelector("#root"));