import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Order from './components/Order';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {
	state = {
		cart: [],
		meals: []

	}

	AddToCart = (event) => {
		const selectedMeal = event.currentTarget.id;
		const selectedQty = event.currentTarget.value;
		let existingCart = this.state.cart;
		if (existingCart.find(x => x.meal === selectedMeal)) {
			const index = existingCart.findIndex(x => x.meal === selectedMeal);
			existingCart[index].qty = Number(selectedQty);
		} else {
			existingCart = [...existingCart, {qty: Number(selectedQty), meal: selectedMeal}]; 	
		}
		
		localStorage.setItem('cart', JSON.stringify(existingCart));
		this.setState({cart : existingCart});
		
	}

  componentDidMount() {
		// get cached (if existing) cart
		const cachedCart = localStorage.getItem('cart');
    if (cachedCart) {
      this.setState({ cart: JSON.parse(cachedCart) });
    }


        fetch('http://localhost:5000/api/meals')
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            this.setState({
                meals: res
            })
        })
        .catch( function (err) {
            console.log(err);
        })
    }


	

  render() {
    return (
      <div>
				<Router>
					<div>
						<Header />
						<Route exact path="/"	render={ (props) => <Menu {...props} AddToCart = {this.AddToCart} cart={this.state.cart} meals={this.state.meals} />} />
						<Route path="/cart" render={ (props) => <Cart {...props} cart={this.state.cart} meals={this.state.meals} />} />
						<Route path="/order" component={Order} />
					</div>
  			</Router>

      </div>
    );
  }
}

export default App;
