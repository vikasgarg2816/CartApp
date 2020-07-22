import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar'

class App extends React.Component{
  constructor() { 
    super();
    this.state = {
      products : [
        {
          price : 99,
          title: 'Watch',
          qty : 1,
          img : 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=759&q=80',
          id : 1
        },
        
        {
          price : 999,
          title: 'Mobile Phone',
          qty : 10,
          img : 'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
          id : 2
        },
            
        {
          price : 999,
          title: 'Laptop',
          qty : 4,
          img : 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=393&q=80',
          id : 3
        }
      ]

    } 
  }

  handleIncreaseQuantity = (product) =>{
      console.log("Hey please incr qty of",product);
      const {products} = this.state;
      const index = products.indexOf(product);

      products[index].qty += 1;
      this.setState({
          products : products
      })

  }

  handleDecreaseQuantity = (product) =>{
      console.log("Hey please decr qty of",product);
      const {products} = this.state;

      const index = products.indexOf(product);
      
      if(products[index].qty === 0){
          return;
      }

      products[index].qty -= 1;
      this.setState({
          products
      })
  }

  handleDeleteProduct = (id) =>{
      const{products} = this.state;

      const items = products.filter((item) => item.id !== id);

      this.setState({
          products : items
      });
  }

  getCartCount = () =>{
    const {products} = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }

  getCartTotal = () =>{

    const {products} = this.state;
    let CartPrice = 0;

    products.forEach((product)=>{
      CartPrice = CartPrice + product.price*product.qty;
    });


    return CartPrice
  }

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={{padding:10,fontSize:20}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
