import React from "react";

function Skill() {
  return (
    <div className="skills" id="skill">

    <div>
    <h1 className="skillsheading">
        Skills
    </h1>

     <div className="skill-card">

          {/* card1 */}

        <div className="scard">
          <h2 className="scard-heading"><u>Programming</u></h2>
          <ul>
            <li className="skill-list"><img src={require("./icons/cpp.png")}/><p>C++</p></li>
            <li className="skill-list"><img src={require("./icons/c.png")}/><p>C</p></li>
            <li className="skill-list"><img src={require("./icons/python.png")}/><p>Python(Basics)</p></li>
          </ul>

        </div>

          {/* card2 */}

        <div className="scard">
        <h2 className="scard-heading"><u>Frontend</u></h2>
        <ul>
            <li className="skill-list"><img src={require("./icons/html.png")}/><p>HTML</p></li>
            <li className="skill-list"><img src={require("./icons/css.png")}/><p>CSS</p></li>
            <li className="skill-list"><img src={require("./icons/javascript.png")}/><p>JavaScript</p></li>
            <li className="skill-list"><img src={require("./icons/bootstrap.png")}/><p>Bootstrap</p></li>
            <li className="skill-list"><img src={require("./icons/react.png")}/><p>React.Js</p></li>
            <li className="skill-list"><img src={require("./icons/jquery.png")}/><p>Jquery</p></li>
          </ul>
        </div>

          {/* card3 */}

        <div className="scard">
        <h2 className="scard-heading3"><u>Backend<p className="backend-basic">(Basics)</p></u></h2>
        <ul>
            <li className="skill-list"><img src={require("./icons/nodejs.png")}/><p>NodeJS</p></li>
            <li className="skill-list"><img src={require("./icons/express.png")}/><p>ExpressJS</p></li>
            <li className="skill-list"><img src={require("./icons/ejs.png")}/><p>EJS</p></li>
            <li className="skill-list"><img src={require("./icons/sql.png")}/><p>SQL</p></li>
            <li className="skill-list"><img src={require("./icons/mongodb.png")}/><p>MongoDB</p></li>
            <li className="skill-list"><img src={require("./icons/git.png")}/><p>Git/GitHub</p></li>
            
          </ul>
          
        </div>
     </div>

    </div>
    </div>
  );
}

export default Skill;
