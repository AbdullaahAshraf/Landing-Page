import React from "react";
import './Footer.css'
function Footer(){
    return (
        <footer className="footer">
      <div className="footer-top">
        <p>&copy; 2023 Yourcompany</p>
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#facebook" className="icon facebook"></a>
          <a href="#linkedin" className="icon linkedin"></a>
          <a href="#twitter" className="icon twitter"></a>
          <a href="#youtube" className="icon youtube"></a>
          <a href="#instagram" className="icon instagram"></a>
        </div>
      </div>
    </footer>
  );

    
}
export default Footer