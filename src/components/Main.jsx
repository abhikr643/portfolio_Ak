import React from "react";

function Main() {
  return (
    <div>
    <main className="main" id="home">

        <div className="intro">
        <div className="intro1">
            <h1>
                Hi! I'm Abhishek Kumar
            </h1>
            <br></br>
            <h3>
                WEB DEVELOPER
            </h3>
            <br></br>
            <p>I'm Undergrad Student At IIT Hyderabad,</p>

            <p>
                I'm passionate about coding , Apart from </p>
             <p>
                web development. I'm Working on
               
             </p>
             
               <p>
              Software development skills.
            </p>
           
        </div>

        <div className="introimg">
            
            <img className="avatar" src={require('./abhi_img.png')}></img>
        </div>
        </div>
    </main>

    </div>
  );
}

export default Main;
