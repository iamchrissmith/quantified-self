import React, { Component } from 'react';
import FoodRows from './FoodRows';

class MealTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: props.limit,
      totalCalories: 0,
      remainingCalories: props.limit,
      foods: props.meal.foods
    }
  }

  componentDidMount() {
    this.setState({
      totalCalories: this.sumCalories(),
      remainingCalories: this.state.limit - this.sumCalories()
    })
  }

  sumCalories() {
    return this.state.foods.reduce( (sum, food) => {
      sum += food.calories;
      return sum;
    }, 0)
  }

  remainingCalSign() {
    return this.state.remainingCalories >= 0 ? 'positive' : 'negative';
  }

  render() {
    return (
      <div className="col">
        <h2>{this.props.meal.name}</h2>
        <table className="table meal-table" data-name={this.props.meal.name} data-id={this.props.meal.id}>
          <thead className="thead-default">
            <tr>
              <th>Name</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
            
          <FoodRows foods={this.state.foods} diary={false} />
          <tfoot className="thead-inverse">
            <tr>
              <th>Total Calories</th>
              <th>{this.state.totalCalories}</th>
              <th></th>
            </tr>
            <tr>
              <th>Remaining Calories</th>
              <th>
                <span className={"remaining", this.remainingCalSign()}>
                  {this.state.remainingCalories}
                </span>
              </th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default MealTable;