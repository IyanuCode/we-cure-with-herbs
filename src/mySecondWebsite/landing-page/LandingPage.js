import React from 'react'
import "./LandingPage.css";
import { IoMdTime } from "react-icons/io";
import { FaHourglassStart } from "react-icons/fa";

export const LandingPage = () => {
   
  return (
    <div className='LandingPage'>
        <video src="./herbVideo/production_id-4902169 (1080p).mp4" autoPlay muted loop></video>
        <div className='landing'>
          <h1>WE CURE WITH HERBS</h1>
          <p>It's not as difficult as you think!</p>
          <p>There is a cure to every Illness</p>

          <div className="landingPageBtn">
            <button className='btn1'>Get Started <span><FaHourglassStart  className='landPageIcon'/></span></button>
            <button>Book A Section <IoMdTime className='landingPageIcon2'/> </button> 
       </div>
        </div>
      

    </div>
  )
}
