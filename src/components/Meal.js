import React from 'react';


const Meal = (props) => {
    return(
        <div className="card-meal">
            <ul>
                <li> {props.info.title} </li>
                <li> {props.info.text} </li>
                <li> {props.info.price} Euros TTC </li>
            </ul>
						Ajouter au panier : <input onChange={props.AddToCart} type="number" min="0" max="99" id={props.info.title} value={props.mealCartQty} />
        </div>
    )
}

export default Meal; 
