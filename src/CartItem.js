import React from 'react';

class CartItem extends React.Component{

    
    // testing(){
    //     const promise = new Promise((resolve,reject) =>{
    //         setTimeout(() =>{
    //             resolve('done');
    //         },5000);
    //     })

    //     promise.then(() =>{
    //         this.setState({
    //             qty : this.state.qty + 10
    //         });
    //         this.setState({
    //             qty : this.state.qty + 10
    //         });
    //         this.setState({
    //             qty : this.state.qty + 10
    //         });
    //         console.log(this.state);
    //     })
    // }

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

    decreaseQuantity = ()=>{

        const {qty} =  this.state;
        if(qty===0){
            return;
        }

        // setState form 2
        this.setState((prevState)=>{
            return{
                qty : prevState.qty - 1
            }
        });
    }


    render(){
        console.log('this.props',this.props);
        const {price,title,qty} = this.props.product; // Object destructuring
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
                            onClick = {this.decreaseQuantity}
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