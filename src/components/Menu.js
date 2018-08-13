import React  from 'react';
import Meal from './Meal';


class Menu extends React.Component {

    render(){
        const renderMenu = this.props.meals.map(meal =>{
					const mealCart = this.props.cart.find(x => x.meal === meal.title);
					const mealCartQty = mealCart ? mealCart.qty : 0;
						
					return <Meal key={meal.title} info={meal} AddToCart={this.props.AddToCart} mealCartQty={mealCartQty} />
        })
        return(
					<div>
						<h1>Le menu</h1>
            <div id="cards-meal">
                {renderMenu}
            </div>
					</div>
        )
    }
}

export default Menu;
