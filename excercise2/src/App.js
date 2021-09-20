import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
  }

    addFood = (x) => 
    {
      if (x === 1) {
      this.setState({items: [...this.state.items, {id:1, value: 'Milk', qty:5, unit:'ltr'}]});
      }

      else if (x === 2) {
        this.setState({items: [...this.state.items, {id:2, value: 'Bananas', qty:6, unit:'pcs'}]});
      }

      else if (x === 3) {
        this.setState({items: [...this.state.items, {id:3, value: 'Bread', qty:7, unit:'x'}]});
      }

      else if (x === 4) {
        this.setState({items: [...this.state.items, {id:4, value: 'Eggs', qty:8, unit:'x'}]});
      }
    }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <div className='buttons'>
        <button type="button" onClick={() => this.addFood(1)}> 5 Milk </button>
        <button type="button" onClick={() => this.addFood(2)}> 6 Bananas </button>
        <button type="button" onClick={() => this.addFood(3)}> 7 Breads </button>
        <button type="button" onClick={() => this.addFood(4)}> 8 Eggs </button>
      </div>
    </div>
  }
}

export default App;