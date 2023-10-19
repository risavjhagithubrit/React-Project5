import React, { Component } from 'react';

class AgeCalculator extends Component {
  constructor() {
    super();
    this.state = {
      birthdate: '',
      age: null,
    };
  }

  calculateAge = () => {
    const birthdate = new Date(this.state.birthdate);
    if (isNaN(birthdate)) {
      alert('Please enter a valid date.');
      return;
    }

    const today = new Date();
    const birthMonth = birthdate.getMonth();
    const birthDay = birthdate.getDate();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    let age = today.getFullYear() - birthdate.getFullYear();

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      age--;
    }

    this.setState({ age });
  }

  handleBirthdateChange = (event) => {
    this.setState({ birthdate: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>Age Calculator</h2>
        <input
          type="text"
          value={this.state.birthdate}
          onChange={this.handleBirthdateChange}
          placeholder="YYYY-MM-DD"
        />
        <button onClick={this.calculateAge}>Calculate Age</button>
        {this.state.age !== null && (
          <p>Your age is: {this.state.age} years old</p>
        )}
      </div>
    );
  }
}

export default AgeCalculator;
