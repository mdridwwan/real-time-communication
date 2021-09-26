import React, { useEffect, useState } from 'react';
import DevCart from '../devCart/DevCart';
import TotalCount from '../TotalCount/TotalCount';
import './Body.css'

const Body = () => {
    const [developers, setDeveloper] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>
        fetch('./developer.json')
        .then(res => res.json())
        .then(data =>setDeveloper(data))
    ,[])

    // event hanlader
    const handlerAddToCart = product =>{
            const newCount = [...cart, product];
             setCart(newCount)
    }
        
    return (
        <div className="contain">
            
              <div className="allCart">
              {
                     developers.map(developer => <DevCart
                        key ={developer.id}
                         developer={developer} 
                         handlerAddToCart={handlerAddToCart}
                         ></DevCart>)
                 }
              </div>
            <div className="mx-auto">
                 <TotalCount developers={cart}></TotalCount>
            </div>
            
        </div>
    );
};

export default Body;