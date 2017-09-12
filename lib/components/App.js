import React, { Component } from 'react';
import axios from 'axios';
import FoodMenu from './FoodMenu';
import MealTables from './MealTables';

const baseUrl = 'https://qs-bc-node-api.herokuapp.com/api/v1';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals:[],
      foods:[]
    }
  }

  componentDidMount() {
    this.getMeals();
    this.getFoods();
  }

  getMeals() {
    return axios.get(`${baseUrl}/meals`)
      .then( meals => {
        this.setState({
          meals: meals.data
        });
      });
  }

  getFoods() {
    return axios.get(`${baseUrl}/foods`)
      .then( foods => {
        this.setState({
          foods: foods.data
        });
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          
            <FoodMenu foods={this.state.foods} />
          
          <div className="col-md-8">
            <div className="container">
              <h1>Main Diary</h1>
            </div>
            <div className="container" id="meals">
              <MealTables meals={this.state.meals} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;