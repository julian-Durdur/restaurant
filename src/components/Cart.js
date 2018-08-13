import React from 'react'

const Cart = (props) => {
	let total = 0;
	const renderCart = props.cart.map(x => {
		const mealMenu = props.meals.find(y => y.title === x.meal
		);
		const mealMenuPrice = mealMenu ? mealMenu.price : 0;
		total += x.qty*mealMenuPrice;
		return <div key={x.meal}>{x.meal} x {x.qty} (prix : {mealMenuPrice} Euros x {x.qty}  = {x.qty*mealMenuPrice} Euros)</div>
	})
	return(
		<div>
			<h1>Votre panier</h1>
			{renderCart}

			<p>Total : {total} Euros</p>
		</div>
	)
}

export default Cart;
