import React from 'react';
import './TotalCount.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMinus, faUser, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const TotalCount = (props) => {
    const{developers} = props;
    let totalDEv = developers.length;
    let totalCost = 0; 
    //developer loop total
    for(const developer of developers){
        console.log(developer)
         totalCost = totalCost + developer.salary;
    }
    // icone
    const minusIcone = <FontAwesomeIcon icon={faMinus} />
    const userIcone = <FontAwesomeIcon icon={faUser} />
    const buyIcone = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="devCount">
            <h2>{userIcone} Developer Added: <span>{totalDEv}</span></h2>
            <h2>Total Cost: ${totalCost}</h2>
            {
                developers.map(developer => <div className="devName">
                    <a href="">{minusIcone}</a>
                     {developer.name} 
                     <img  src={developer.img} alt="" />
                     <small>${developer.salary}</small>
                     </div>)
            }
            <button className="btn">{buyIcone} Hire Now</button>
        </div>
    );
};

export default TotalCount;