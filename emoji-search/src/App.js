import React, { Component } from 'react';
import List from './List';
import Search from './Search';

import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    };
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
  }
  render() {
    const filteredEmojis = filterEmojis(this.props.emojis, this.state.searchTerm);
    return (
      <div className="App">
        <h1>Emoji Search</h1>
        <Search updateSearchTerm={this.updateSearchTerm}/>
        <List emojis={filteredEmojis}/>
      </div>
    );
  }
  updateSearchTerm (searchTerm) {
    this.setState({
      searchTerm: searchTerm
    });
  }
}

function filterEmojis(emojis, searchTerm, maxResults = 10) {
  return emojis.filter((emoji) => {
    return emoji.title.includes(searchTerm) || emoji.keywords.includes(searchTerm);
  }).slice(0, maxResults);
}

export default App;
