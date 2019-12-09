import React,{createContext,useState} from 'react';
import {data} from '../data/data';

data.forEach((item) => {
    item.quantity = 0;
  });
export const Context = createContext({
    cartItems: [],
    totalPrice: 0,
    add: ()=>{},
    del: ()=>{}
});

const ContextProvider = props => {
    const [cartItem, modifyCart] = useState([]);
    const [total, calcTotal] = useState(0);

    const addToCart = (id,price) => {
        if(cartItem.some(item => item.id===id)){
            const item = cartItem.find(x => {
                if(x.id === id){
                    x.quantity+=1;
                }
                return x;
            });
        }
        else{
            const item = data.find(x => {
            if(x.id === id){
                return x;
            }
            });
            item.quantity=1;
            modifyCart(y => [...y, item]);
        }
        calcTotal(total+parseInt(price));
      }

      const delFromCart = (id,price) => {
            const item = cartItem.find(x => {
                if(x.id === id){
                    if(x.quantity>1){
                        x.quantity-=1;
                    }
                    else{
                        x.quantity=0;
                        modifyCart(currentItems => {
                            return currentItems.filter((y) => y.id!==id);
                        });
                    }
                }
                return x;
            });
        calcTotal(total-parseInt(price));
      }

      return(
          <Context.Provider value={{add: addToCart, del: delFromCart, cartItems: cartItem, totalPrice: total}}>
              {props.children}
          </Context.Provider>
      )
}

export default ContextProvider;