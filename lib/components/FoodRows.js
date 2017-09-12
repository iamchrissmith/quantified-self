import React, { Component } from 'react';
import FoodRow from './FoodRow';

class FoodRows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkAll: props.checkAll
    };
  }

  render() {
    let foodsList = this.props.foods.map( (food) => {
                    return (<FoodRow key={food.id} food={food} diary={this.props.diary} check={this.props.checkAll} />);
                  });
    return  <tbody>{ foodsList }</tbody>
  }
}

export default FoodRows;