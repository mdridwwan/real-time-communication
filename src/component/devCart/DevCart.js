import React from 'react';
import './DevCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee, faSimCard, faRobot, faPlus, faStreetView} from '@fortawesome/free-solid-svg-icons';

const DevCart = (props) => {
    // destructuring
    const {name, img, salary, country, age, role} = props.developer
    // icone
    const purcheseIcon = <FontAwesomeIcon icon={faCoffee} />
     const facebook = <FontAwesomeIcon icon={faSimCard} />
     const instgram = <FontAwesomeIcon icon={faRobot} />
     const plus = <FontAwesomeIcon icon={faPlus} />
     const details = <FontAwesomeIcon icon={faStreetView} />
    return (
            <div className="cart">
               <div className="cartHead">
                     <img src={img} alt="" />
               </div>
               <div className="cartBody">
               <h3>Name: <span>{name}</span></h3>
               <h3>Role: <span>{role}</span></h3>
               <h3>Age: <span>{age}</span></h3>
               <h3>Country: <span>{country}</span></h3>
               <h3>Salary: <span>${salary}</span></h3>
               <div>
                   <span>Social Media:</span>
                   <span className="socialMedia">
                       <a href="">{purcheseIcon}</a>
                       <a href="">{facebook}</a>
                       <a href="">{instgram}</a>
                   </span>
               </div>
               <button  onClick={() => props.handlerAddToCart(props.developer)} className="btn">{plus} Hire Me</button>
               <button className="btn">{details} Details</button>
               </div>
               
         </div>
    );
};

export default DevCart;