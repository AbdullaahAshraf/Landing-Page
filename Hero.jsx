
import React from 'react';
import './Hero.css';


function Hero() {
    return (
      <section className="hero">
        <div className="hero-content">
          <h1>Introduce Your Product<br />Quickly & Effectively</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Purchase UI Kit</button>
            <button className="secondary-btn">Learn More</button>
          </div>
          <div className="hero-image">
            <img src="/src/heroimg.png" alt="Hero" />
          </div>
        </div>
       
      </section>
    );
  }
export default Hero
