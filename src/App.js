import './App.css';
import { Navbar } from './mySecondWebsite/navbar/Navbar';
import { About } from './mySecondWebsite/aboutUs/About';
import { MeetUs } from './mySecondWebsite/meet-us/MeetUs';
import { Contact } from './mySecondWebsite/contact/Contact';
import { Register } from './mySecondWebsite/register/Register';
import { Login } from './mySecondWebsite/login/Login';
import { Home } from './mySecondWebsite/home/Home';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from './mySecondWebsite/landing-page/LandingPage';
import { Card } from './mySecondWebsite/mainPage/card/Card';
import { Footer } from './mySecondWebsite/footer/Footer';
// import { BrowserRouter as Switch } from 'react-router-dom';


function App() {  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        
        <Routes>
          {/* <Switch> */}
            <Route element = { <About/>} path='/aboutUs' />
            <Route element = { <Contact/>} path='/contact' />
            <Route element = { <MeetUs/>} path='/meet-us' />
            <Route element = { <Register/>} path='/register' />
            <Route element = { <Login/>} path='/login' />
            <Route element = { <Home/>} path='/' />
          {/* </Switch> */}
        </Routes>
      </BrowserRouter>

      <LandingPage/>
      <Card/>
     <BrowserRouter>
     <Footer/>
     </BrowserRouter>
      
      
    </div>
  );
}

export default App;
