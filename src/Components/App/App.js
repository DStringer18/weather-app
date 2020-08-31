import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import OpenWeather from '../../util/OpenWeather';
import snow from '../../Assets/Images/snow.jpg';
import storm from '../../Assets/Images/storm.jpeg';
import rain from '../../Assets/Images/rain.jpg';
import clear from '../../Assets/Images/clear.jpg';
import cloudy from '../../Assets/Images/cloudy.jpg';
import background from '../../Assets/Images/background.jpg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      bgImage: `url(${background})`
    }
    this.search = this.search.bind(this);
    this.changeBackground = this.changeBackground.bind(this);
  }

  changeBackground(searchResults){     
    console.log('change background to:', searchResults);   
    switch (searchResults) {
      case 'Clear':
        this.setState({bgImage: `url(${clear})`});
        break;
    
      case 'Clouds':
        this.setState({bgImage: `url(${cloudy})`});
        break;
      
      case 'Rain':
      case 'Drizzle':
      case 'Mist':
        this.setState({bgImage: `url(${rain})`});
        break;
      
      case 'Thunderstorm':
        this.setState({bgImage: `url(${storm})`});
        break;
    
      case 'Snow':
        this.setState({bgImage: `url(${snow})`});
        break;
      
      default:
        break;
    }
  }

  search(term){
    OpenWeather.searchWeather(term).then(searchResults => {
      this.setState({ searchResults: searchResults })
      console.log('search:', searchResults);
      this.changeBackground(searchResults)
    })
  }

  render() {
    return (
      <div>
        <body style={{backgroundImage: this.state.bgImage}} className="Body">
          <h1>Weather App</h1>
          <div className="App">
            <SearchBar onSearch={this.search}/>
            <div className="day-container">
              <SearchResults searchResults={this.state.searchResults} />
            </div>
          </div>
        </body>
      </div>
    )
  }
}

export default App;