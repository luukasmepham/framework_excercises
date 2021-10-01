import './App.css';
import data from './data.json';
import Products from './components/Products.js';

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
          const resultName = results.title.toLowerCase();
          return resultName.includes(query);
      })
  }

    return (
      <div>
        <div>
          <div className="searchField">
            <p> Search </p>
            <input type="search" 
                   className="textField" 
                   value = {this.state.inputValue}
                   onChange={event => this.updateInputValue(event)}/>
          </div>
        </div>
        <div>
          <Products products = {filteredSearch(this.state.products, this.state.inputValue)}/>
        </div>
      </div>
    )
  }
}