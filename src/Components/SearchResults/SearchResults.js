import React from 'react';
import Day from '../Day/Day';
import './SearchResults.css';

class SearchResults extends React.Component {

  render() {
    return (
      <div className="day-container">
        <h2 className="weatherIs">The weather is:</h2>
        <Day date={this.props.searchResults.date}
            weather={this.props.searchResults.weather}
            temp={this.props.searchResults.temp}
            humidity={this.props.searchResults.humidity}
            />      
      </div>
    )
  }
}

export default SearchResults;