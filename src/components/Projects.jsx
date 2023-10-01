import React from "react";
import card_data from "./card_data";

function Card(props){
return(
    <div>
    <div className="card">
      <div className="top">
        <a href={props.link} target="_blank"> <img className="card-img" src={props.img}alt="avatar_img" /> </a>
        <a href={props.link} target="_blank" className="cardname"><p>{props.name}</p></a>
        <p className="cardinfo">
          {props.info} 
        </p>

      </div>  
    </div>
  </div>
 )
}

function Project() {
  return (
    <div className="project" id="projects">
    
        <div>
        <h1 className="projectheading">
                Projects
        </h1>
        </div>

        <div className="projectcard">
            <Card
              link={card_data[0].link}
              img={card_data[0].img}
              name={card_data[0].name}
              info={card_data[0].info}
            />

            <Card
              link={card_data[1].link}
              img={card_data[1].img}
              name={card_data[1].name}
              info={card_data[1].info}
            />

            <Card
              link={card_data[2].link}
              img={card_data[2].img}
              name={card_data[2].name}
              info={card_data[2].info}
            />

            <Card
              link={card_data[3].link}
              img={card_data[3].img}
              name={card_data[3].name}
              info={card_data[3].info}
            />

            <Card
              link={card_data[4].link}
              img={card_data[4].img}
              name={card_data[4].name}
              info={card_data[4].info}
            />
          
            
        </div>
        
       

    
    </div>
  );
}

export default Project;
