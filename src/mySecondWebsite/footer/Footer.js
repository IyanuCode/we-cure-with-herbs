import React from 'react'
import "./footer.css"; 
import { Link } from 'react-router-dom';
import { AiFillAlipayCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";





export const Footer = () => {
  return (
    <div className='footer-container'>
        <section className="footer">
            <p className="footer-heading">
                The only help you can render to yourself is to take care of your health. only 
                on a sound health does all other areas of life strive on.
                Join our mailing list to receive update on proper <br/>health care.
            </p>
            <p className="footer-text">
                You can unsubscribe at any time.
            </p>
            <div className="input-form">
                <form action="#">
                    <input type="email" name="" id="" placeholder='Your Email' />
                    <button>Subscribe</button>
                    {/* <Link></Link> */}
                </form>
            </div>
        </section>

        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to="/">How we works</Link>
                    <Link to="/">Testimonials</Link>
                    <Link to="/">Careers</Link>
                    <Link to="/">Investors</Link>
                    <Link to="/">Terms of Service</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Contact Us</h2>
                    <Link to="/">Contact</Link>
                    <Link to="/">Support</Link>
                    <Link to="/">Destinations</Link>
                    <Link to="/">Sponsorships</Link>
                </div>
           
                <div className="footer-link-items">
                    <h2>Videos</h2>
                    <Link to="/">Ambassadors</Link>
                    <Link to="/">Submit Video</Link>
                    <Link to="/">Agency</Link>
                    <Link to="/">Influencer</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Social Media</h2>
                    <Link to="/">Instagram</Link>
                    <Link to="/">Facebook</Link>
                    <Link to="/">Youtube</Link>
                    <Link to="/">Twitter</Link>
                    <Link to="/">LinkedIn</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link className='social-logo' to="/">chanweiyan<AiFillAlipayCircle size={33} color='white'/></Link>
                </div>
                <small className="website-right">TRVL @ 2020</small>
            <div className="social-icons">
                <Link className='social-icon-link' to="/" target="_blank" aria-label="Facebook" ><FaFacebook /></Link>
                <Link className='social-icon-link'  to="/" target="_blank" aria-label="youtube"><FaYoutube /></Link>
                <Link className='social-icon-link' to="/" target="_blank" aria-label="Instagram"><FaInstagram /></Link>      
                <Link className='social-icon-link' to="/" target="_blank" aria-label="Facebook"><FaTwitter /></Link>
                <Link className='social-icon-link' to="/" target="_blank" aria-label="whatsapp"><FaWhatsapp /></Link>
                <Link className='social-icon-link' to="/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></Link>
            </div>
            </div>
        </section>
    </div> 
  )
}
