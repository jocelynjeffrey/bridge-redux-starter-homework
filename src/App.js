import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addProduct, removeProduct } from './actions';
import Chance from 'chance';
export const chance = Chance();

/* TODO: HOMEWORK!!!!!
 *
 * 1. Create the action to remove a product, and update the state to remove a product by id
 * 2. OPTIONAL: Create a more flexible product making form that will allow you to make a product with all field data, show this data too
 * 3. OPTIONAL: Create a filter search bar that allows you to shrink the list of products by whats typed!
 *            hint: it would help if you updated the global state with every keystroke!
  * */

const mapStateToProps = state => {
  return ({
  products: state.products,
  lowStockProducts: state.products.filter(prod => prod.stock && prod.stock < 4),
})};

const mapDispatchToProps = {
  addProduct,
  removeProduct,
};

const Product = (props) => <div>{props.name}</div>;

const AdderButton = ({addProduct}) => <button onClick={ () => addProduct({ name: 'Sofa' }) }>Add Sofa</button>
const RemoveButton = ({removeProduct, product}) => <button onClick={ () => removeProduct(product) }>remove {product.name}</button>

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.addProduct({
      id: chance.guid(),
      name: 'Table',
      department: 'Furniture',
      price: '300.00',
      stock: 5,
    });

  }

  render() {
    const { products, addProduct, removeProduct} = this.props;
    // debugger;
    return (
      <div>
        {products.map(product => {
          return ([
            <Product name={product.name} key={product.id}></Product>,
            <RemoveButton {...this.props} product={product}></RemoveButton>
          ])
        })}

        <AdderButton { ...this.props } />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
