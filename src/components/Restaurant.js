import React  from 'react';
import Meal from './Meal';


class Restaurant extends React.Component {
    state= {
        meals:[
            {
                title:"Tacos",
                text:" Merguez - Nuggets -  Tenders",
                price: 7
            },
            {
                title:"Pizzzzzza",
                text:"Fromage - Viande - Poulet",
                price: 9
            },
            {
                title:"Kebab",
                text:"Salade - Tomate - Ognions",
                price: 6
            }
        ],
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
        const renderMeals = this.state.meals.map( (meal) =>{
            return <Meal info={meal} />
        })
        return(
            <div>
                {renderMeals}
            </div>
        )
    }
}

export default Restaurant;