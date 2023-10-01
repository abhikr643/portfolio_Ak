import React from "react";

function Contacts() {
  return (
    <div>
    <h1 className="contactheading" id="contact">
        Let's Connect On
    </h1>

    <div>
    <div class="contacticon">
        <a href= "mailto:ce22btech11001@iith.ac.in" target="_blank"><img  src={require ("./gmail.png" )} alt="Email"/></a>
        <a href="https://www.linkedin.com/in/abhikr645/" target="_blank"><img src={require ("./linkedin.png" )} alt="Linkedin" /></a>
        <a href="https://github.com/abhikr643" target="_blank"><img src={require ("./github.png" )} alt="Linkedin" /></a>
        <a href="https://www.instagram.com/abhi.kr_ak__/" target="_blank"><img src={require ("./instagram.png" )} alt="Instagram"/></a>                 
    </div>

    <div>
        <p className="copyright">
        Copyright &copy; Made With Love❤️ ~AK
        </p>
    </div>

    </div>

    </div>
  );
}

export default Contacts;
