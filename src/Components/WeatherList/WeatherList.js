import React from 'react';
import './WeatherList.css';

class WeatherList extends React.Component {
  render() {
    return (
      <div className="WeatherList">
        {this.props.weather}
      </div>
    )
  }
}

export default WeatherList;
