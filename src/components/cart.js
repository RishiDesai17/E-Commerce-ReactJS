import React,{useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Context} from '../context/Context';
import auth from '../auth';

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
            <div>
          {auth.isAuthenticated() ? (
           <div><Link style={{position:'absolute', fontSize: 20,right: 150, top: 20, color:'white', textDecoration:'none'}} to="/login" onClick={() => {
            auth.logout(() => {
              props.history.push("/");
            });
          }}>LOGOUT</Link><h3 style={{textAlign: 'center'}}>Hi, {context.uname}</h3></div>) : ''}
          </div> 
            <h1 style={{textAlign: 'center'}}>MY CART</h1>
            {context.cartItems.map((item)=>(
                <Grid container className="card" style={{marginLeft: 0, alignItems:'center'}}>
                    <Grid item xs={12} sm={6} lg={3} style={{textAlign: 'center'}}>
                        <img className="cartProduct" src={item.img}/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} style={{textAlign: 'center'}}>
                        <h2>{item.name}</h2>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} style={{display: 'flex', flexDirection: 'row', marginTop: 10, justifyContent:'center'}}>
                        <Button className="cartButton" onClick={()=>addToCart(item.id,item.price)}>+</Button>
                        <h3 style={{marginTop: 10}}>{item.quantity}</h3>
                        <Button className="cartButton" onClick={()=>delFromCart(item.id,item.price)}>-</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} style={{textAlign: 'center', fontSize: 30}}>
                        <h4>{item.quantity} x {item.price}</h4>
                    </Grid>
                </Grid>
            ))}
            <h3 className="price">Total Price: Rs.{context.totalPrice}</h3>
        </div>
    );
}

export default Cart;