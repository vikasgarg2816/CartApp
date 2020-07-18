import React from 'react';

class CartItem extends React.Component{

    constructor() { 
        super();
        this.state = {
            price : 999,
            title: 'Mobile Phone',
            qty : 1,
            img : ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    increaseQuantity = () =>{
        // this.state.qty +=1; (react doesn't know that it will increase qty)
        // console.log('this.state',this.state);

        // setState form 1 (object form)
        // this.setState({
        //     qty : this.state.qty + 1
        // });

        // setState form 2 (function form) - if prev state require use this
        this.setState((prevState)=>{
            return{
                qty : prevState.qty + 1
            }
        });
    }

    render(){
        const {price,title,qty} = this.state; // Object destructuring
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                
                <div className="right-block">
        <div style={ { fontSize: 25 } }>{title}</div>
                    <div style={ { color: "#777" } }>Rs {price}</div>
                    <div style={ { color: "#777" } }>Qty : {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/992/992651.svg" 
                            onClick = {this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/992/992683.svg" 
                        />
                        <img
                            alt="delete" 
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/3096/3096673.svg"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image : {
      height : 110,
      width : 110,
      borderRadius : 4,
      background : '#ccc'
    }
  }

export default CartItem;