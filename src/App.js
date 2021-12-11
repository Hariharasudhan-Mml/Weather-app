
import {  useState } from 'react';
import './App.css';
import Home from './components/home/home';
import axios from 'axios';
import Weather from './components/weather/weather';

function App() {
const [city,setCity]=useState('');
const [data,setData]=useState({});

const onchange=(event)=>{
  const value=event.target.value;
setCity(()=>value);
console.log(value);
}

const fetchWeather=async (city)=>{
 const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3777119a46a20889689700ac3cd6bff3`);
 const {main:{temp},weather:[{description , icon}]}=response.data;

  setData(()=>({temp,description,icon,city}))
  
}
const submit=()=>{
fetchWeather(city);
}

 
  return (
   <div>
    { data.temp ?  <Weather temp={data.temp} desc={data.description} icon={data.icon} city={city}/> : <Home onchange={onchange} submit={submit} value={city}/> }
   
   </div>
  );
}

export default App;
