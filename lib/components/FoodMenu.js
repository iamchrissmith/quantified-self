import React, { Component } from 'react';
import Button from './Button';
import FoodRows from './FoodRows';

class FoodMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkAll: false
    };
  }

  createFood() {
    window.location.href = "./foods.html";
  }

  checkAllFoods() {
    this.setState({
      checkAll: true
    });
  }

  render() {
    return (
      <div className="col-md-4">
        <h2>Foods</h2>
        <Button 
          classes="btn btn-outline-success"
          text="Create New"
          onClick={this.createFood.bind(this)}
        />
        <hr/>
        <h3>Add Selected To</h3>
        <div className="btn-group select-meal" role="group" aria-label="Meal Selection">
          <button type="button" className="btn btn-outline-info">Breakfast</button>
          <button type="button" className="btn btn-outline-info">Lunch</button>
          <button type="button" className="btn btn-outline-info">Dinner</button>
          <button type="button" className="btn btn-outline-info">Snack</button>
        </div>
        <hr/>
        <div className="input-group">
          <div className="input-group-addon">Search by Name:</div>
          <input type="text" className="form-control" name="food-filter" placeholder="Food Name" aria-label="Search by Food Name" />
        </div>
        <div className="table-responsive">
          <table className="table table-borderd" id="foods-table">
            <thead className="thead-default">
              <tr>
                <th>Name</th>
                <th className="calories-header">Calories</th>
                <th>
                  <Button 
                    classes="btn btn-outline-secondary btn-sm"
                    text="All"
                    onClick={this.checkAllFoods.bind(this)}
                  />
                </th>
              </tr>
              
            </thead>
            <FoodRows foods={this.props.foods} diary={true} checkAll={this.state.checkAll}/>
          </table>
        </div>
      </div>
    );
  }
}

export default FoodMenu;