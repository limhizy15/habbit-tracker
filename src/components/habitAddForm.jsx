import React, { Component } from "react";

class HabitAddForm extends Component {
  render() {
    return (
      <form className="add-form">
        <input
          type="text"
          className="add-input"
          placeholder="Enter new habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
