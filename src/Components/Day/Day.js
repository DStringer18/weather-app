import React from 'react';
import './Day.css'

class Day extends React.Component {
  render() {
    return (
      <div className="Day">
        <div className="Day-information">
          <h3>{this.props.date}</h3>
          <ul>
            <li>{this.props.weather}</li>
            <li>Temperature: {this.props.temp} C</li>
            <li>Humidity: {this.props.humidity}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Day;