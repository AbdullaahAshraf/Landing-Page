
import React from "react";
import './Section1.css';

function Section1(){
    return(
        <section className="section1">
        <div className="section1-content">
            <h1>Light, Fast & Powerful</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>

        <div className="cards-container">
          <div className="card">
             <h3>Title Goes Here</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
           </div>
        <div className="card">
          <h3>Title Goes Here</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
        </div>
 
    
     </div>
        </section>
    )
}

export default Section1