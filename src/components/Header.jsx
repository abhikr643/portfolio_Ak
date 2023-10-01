import React from "react";

function Header() {
  return (
    <div>
      <header>
      <nav className="navbar">
            <div className="logo">
            <h1 className="logo1">AK</h1>
            </div>

              <div className="navlist">
              <ul>
              <a href="#home"><li>Home</li></a>
              <a href="#skill"><li>Skills</li></a>
              <a href="#projects"><li>Projects</li></a>
              <a href="#contact"><li>Contact</li></a>
              </ul>
              </div>
       
       
        </nav>
      </header>
    </div>
  );
}

export default Header;
