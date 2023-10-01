import React from "react";

function About() {
  return (
    <div>
    <main>

    <div className="about" id="about-me">

            <div>
            <img className="aboutimg" src={require('./about.png')}></img>
            </div>
            
            
            <div>
                <h1 className="aboutheading">
                About Me
                </h1>
                <p className="aboutintro">
                Hi, I'm Abhishek Kumar, a Btech Student at IIT Hyderabad, passionate about coding and technology.
                Apart from Web Development , I have bit of knowledge in Software field and have done basic of DSA (Data Structure And Algorithm).
                Has good grasp on C++/C programming language, and basic familar with Python.      
                 </p>

            </div>

            

        </div>

    </main>
    
    </div>
  );
}

export default About;
