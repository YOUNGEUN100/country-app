import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect} from 'react'
import './App.css'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import Navbar from './component/Navbar'

function App() {

  const [darkmode, setDarkmode] = useState(false);
  const handleDarkmode = () => {
    setDarkmode(!darkmode);
    console.log(darkmode)
  }

  const [countries, setCountries] = useState(null); // 불러올 전체 데이터
  const [name, setName] = useState("");

  const fetData = () => {
    let API_URL;
    if (name == "") { API_URL = `https://restcountries.com/v3.1/all`; } 
    else { API_URL = `https://restcountries.com/v3.1/name/${name}`;}
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        console.log(countries);
      })
  }  

  const handleCountryChange = (e) => {
    setName(e.target.value);
    // console.log(name);
  }

  const handleCountrySearch = (e) => {
    e.preventDefault();
    fetData();
  }

  // 시작할 때만 실행됨
  useEffect(() => {
     fetData();
  }, []);

  return (
    <BrowserRouter>
      <Navbar 
        darkmode={darkmode} 
        handleDarkmode={handleDarkmode}  
      />
      <Routes>
        <Route path='/' 
        element={
        <Home 
          data={countries}
          name={name} 
          handleCountryChange={handleCountryChange}
          handleCountrySearch={handleCountrySearch}
          darkmode={darkmode} 
        />} />
        <Route 
          path='/detail/:capital' 
          element={
          <Detail 
            data={countries} 
            darkmode={darkmode}  />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
