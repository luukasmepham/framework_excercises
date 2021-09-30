import './App.css';
import data from './data.json';
import Products from './components/Products.js';
import Search from './components/Search.js'

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
        products: data
      }
  }

  render() {
    return (
      <div>
        <div>
          <Search />
        </div>
        <div>
          <Products products = {this.state.products}/>
        </div>
      </div>
    )
  }
}