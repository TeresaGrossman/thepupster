import React from "react";
import "./PuppyCard.css";
// /*.hero-image {
//   background-image: url("photographer.jpg"); /* The image used */
//   background-color: #cccccc; /* Used if the image is unavailable */
//   height: 500px; /* You must set a specified height */
//   background-position: center; /* Center the image */
//   background-repeat: no-repeat; /* Do not repeat the image */
//   background-size: cover; /* Resize the background image to cover the entire container */
// }

const PuppyCard = props => (
    <div   onClick={() => props.shufflePuppys(props.id)} id={props.id} alt={props.name} style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover",
      backgroundPosition: 'center', backgroundImage: `url( ${props.image} )`}} className="card img-container hover">
    
    </div>
);

export default PuppyCard;