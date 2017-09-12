import React, { Component } from 'react';

const deleteIcon = 'https://rongxanh88.github.io/quantified-self/vendor/assets/delete.png';

class FoodRow extends Component {
  constructor(props){
    super(props);
    this.checkIt = this.checkIt.bind(this);
    this.state = {
      checked: props.checked
    }
  }  

  checkIt() {
    this.setState({
      checked: !this.state.check
    });
  }

  render() {
    const opts = {};
    if (this.state.checked) {
      opts.checked = "checked";
    }
    return (
      <tr className="food-row">
        <td className="food-name" data-id={this.props.food.id}>{this.props.food.name}</td>
        <td className="food-calories number" data-id={this.props.food.id}>{this.props.food.calories}</td>
        <td>
          { this.props.diary ? (
            <input data-id={this.props.food.id} type="checkbox" value={this.props.food.id} {...opts} onChange={this.checkIt}/>
           ) : (
            <input type="image" src={deleteIcon} className="delete-food" data-id={this.props.food.id} />
           )
          }
        </td>
      </tr>
    );
  }
}

export default FoodRow;