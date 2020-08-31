import React from 'react';
import WeatherList from '../WeatherList/WeatherList'
import './SearchResults.css';

class SearchResults extends React.Component {
  render() {
    return (
      <div className="day-container">
        <h1>Weather is:</h1>
        <WeatherList weather={this.props.searchResults}/>
      </div>
    )
  }
}

export default SearchResults;