import React from "react";
import { Link } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./services.css"; // Import a CSS file for styling

export default function Services() {
  return (
    <div>
      <Navbar />
      <div className="service-page">
        <div className="service-section">
          <div className="service-item wedding">
          <img src="images/beatriz-perez-moya-M2T1j-6Fn8w-unsplash (1).jpg" alt="Wedding" />
            <div className="content">
              <h2>Weddings</h2>
              <p>
                From the enchanting allure of the venue to the delicate details of decor, we specialize in orchestrating weddings that epitomize romance and elegance. 
                With meticulous planning, personalized touches, and a commitment to excellence, we transform your dream wedding into a seamless unforgettable experience. 
                Whether it's an intimate affair or a grand celebration, let us bring your love story to life with precision, passion, and unparalleled expertise.
                At EventXO, we specialize in turning dreams into reality, and our wedding planning services are no exception. 
                Picture a day filled with enchantment, romance, and seamless elegance that's the wedding experience we craft for our 
                clients.From selecting the perfect venue to curating intricate decor details, we ensure every element reflects your unique love story. Our dedicated team of experts orchestrates a celebration that transcends expectations, creating an atmosphere where love and beauty intertwine. Let EventXO transform your special day into an unforgettable, magical journey that marks the beginning of your happily ever after."
              </p>
              <Link to="/Login">
                <button className="cta-button">Book Now</button>
              </Link>
            </div>
          
          </div>
          <div className="service-item birthday">
            <img src="images/lidya-nada-MD_ha01Bk7c-unsplash.jpg" alt="Birthday" />
            <div className="content">
              <h2>Birthdays</h2>
              <p>
                Blow out the candles and make a wish as we turn your birthday dreams into reality. From whimsical themes to bespoke
                 decorations, we specialize in crafting unforgettable birthday celebrations tailored to your unique style and personality. 
                 With meticulous attention to detail and a flair of creativity, we ensure every moment is filled with joy, laughter, and 
                 cherished memories. Let us handle the planning so you can focus on making a wish and enjoy festivities surrounded by your
                  loved ones.At EventXO, we bring your birthday dreams to life with an extra touch of magic and flair. Our birthday event 
                  planning services are designed to turn your special day into an unforgettable celebration filled with joy, laughter, and 
                  cherished memories. From whimsical themes to bespoke decorations tailored to your unique style and personality, we specialize 
                  in creating extraordinary birthday experiences. Our meticulous attention to detail and creative flair ensure that every moment
                  is a celebration of you. Let EventXO handle the planning, so you can focus on making a wish and enjoying the festivities surrounded 
                  by your loved ones. Your birthday deserves to be extraordinary, and with EventXO, it will be nothing short of spectacular.
              </p>
              <Link to="/Login">
                <button className="cta-button">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="service-section">
          <div className="service-item corporate">
            <div className="content">
              <h2>Corporate Events</h2>
              <p>
                Elevate your corporate gatherings to new heights with our expert event planning services. From impactful conferences to 
                engaging team-building activities, we specialize in curating seamless and memorable corporate events tailored to your 
                company's objectives and brand identity. With meticulous attention to detail and innovative ideas, we create an 
                environment that fosters collaboration, inspiration, and meaningful connections. Trust us to handle every aspect 
                of your event with professionalism and precision, leaving you free to focus on your business goals and building 
                valuable relationships.At EventXO, we elevate corporate events to new heights of success. As a leader in corporate 
                event planning, we specialize in curating seamless and impactful experiences tailored to your company's objectives 
                and brand identity. Whether it's a high-profile conference, engaging team-building activities, or any corporate gathering, 
                we bring meticulous attention to detail and innovative ideas to the table. Our expert team creates an environment that fosters 
                collaboration, inspiration, and meaningful connections. Trust EventXO to handle every aspect of your corporate event with professionalism 
                and precision, allowing you to focus on your business goals and build valuable relationships. From conception to execution, EventXO transforms 
                your corporate events into powerful, memorable experiences that leave a lasting impression
              </p>
              <Link to="/Login">
                <button className="cta-button">Book Now</button>
              </Link>
            </div>
            <img src="images/cherrydeck-05gac-Qn0k4-unsplash.jpg" alt="Corporate Events" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
