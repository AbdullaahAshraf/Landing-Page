function Navbar(){
    return (
        <nav className="navbar">
          <div className="navbar-container">
 
            
            <ul className="navbar-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="logo">
              <h1>Landing</h1>
            </div>

            <div className="navbar-right">
              <button className="buy-now">Buy Now</button>
            </div>
          </div>
        </nav>
      );

}

export default Navbar