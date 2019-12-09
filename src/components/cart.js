import React,{useContext,useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Context} from '../context/Context';

const Cart = (props) => {
    const context = useContext(Context);

    const addToCart = (id,price) => {
        context.add(id,price);
    }
  
    const delFromCart = (id,price) => {
      context.del(id,price);
    }

    return(
        <div className="font"> 
            <h1 style={{textAlign: 'center'}}>MY CART</h1>
            {context.cartItems.map((item)=>(
                <Grid container className="card">
                    <Grid item xs={12} sm={6} lg={3}>
                        <img className="cartProduct" src={item.img}/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <h2>{item.name}</h2>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                        <Button className="cartButton" onClick={()=>addToCart(item.id,item.price)}>+</Button>
                        <h3 style={{marginTop: 10}}>{item.quantity}</h3>
                        <Button className="cartButton" onClick={()=>delFromCart(item.id,item.price)}>-</Button>
                    </Grid>
                    <h4>{item.quantity} x {item.price}</h4>
                </Grid>
            ))}
            <h3 className="price">Total Price: Rs.{context.totalPrice}</h3>
        </div>
    );
}

export default Cart;