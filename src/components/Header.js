import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
	return(
		<div id="menu">
			<Link to="/"><div>Le menu</div></Link>
			<Link to="/cart"><div>Votre panier</div></Link>
			<Link to="/order"><div>Vos commandes</div></Link>
		</div>
	)
}

export default Header;
