import React  from 'react';
import Meal from './Meal';


class Menu extends React.Component {
    state= {
        meals:[],
    }

    componentDidMount() {
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



    render(){
        const renderMenu = this.state.meals.map( (meal) =>{
            return <Meal info={meal} />
        })
        return(
            <div>
                {renderMenu}
            </div>
        )
    }
}

export default Menu;
