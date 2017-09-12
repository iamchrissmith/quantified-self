import React, { Component } from 'react';
import MealTable from './MealTable';

class MealTables extends Component {
  getCalorieLimits(name: string): number {
    const limits: { [string]: number } = {
      "Breakfast": 400,
      "Snack": 200,
      "Lunch": 600,
      "Dinner": 800
    }
    return limits[name];
  }

  render() {
    var mealsList = this.props.meals.map((meal) => {
                    return (<MealTable key={meal.id} meal={meal} limit={this.getCalorieLimits(meal.name)} />);
                  });
    return  <div className="row">{ mealsList }</div>
  }
}

export default MealTables;