import React from 'react';


const Meal = (props) => {
    return(
        <div>
            <ul>
                <li> {props.info.title} </li>
                <li> {props.info.text} </li>
                <li> {props.info.price} </li>
            </ul>
        </div>
    )
}

export default Meal; 