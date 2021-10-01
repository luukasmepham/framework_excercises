import './App.css';
import data from './data.json';
import Products from './components/Products.js';
import Search from './components/Search.js';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
        products: data,
        inputValue: ''
      }
  }

  updateInputValue(event) {
    this.setState({inputValue: event.target.value})
  }

  render() {

    const filteredSearch = (results, query) => {
      if (!query) {
          return results;
      }
  
      return results.filter((results) => {
          const resultTitle = results.title.toLowerCase();
          return resultTitle.includes(query);
      })
  }

    return (
      <div>
        <div>
          <Search value = {this.state.inputValue} onchange = {event => this.updateInputValue(event)}/>
        </div>
        <div>
          <Products products = {filteredSearch(this.state.products, this.state.inputValue)}/>
        </div>
      </div>
    )
  }
}