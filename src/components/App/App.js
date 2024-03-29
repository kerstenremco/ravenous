import React from 'react';
import BusinessList from './../BusinessList/BusinessList';
import SearchBar from './../SearchBar/SearchBar';
import { search }  from './../util/Yelp';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'businesses': []
    }

    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    search(term, location, sortBy).then(businesses => {
      this.setState({
        'businesses': businesses
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Find&Eat</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;