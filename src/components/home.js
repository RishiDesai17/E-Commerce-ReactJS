import React, {useState,useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {data} from '../data/data';
import {Context} from '../context/Context';

//assigning a new property flag to each object to keep track of whether it is present in the comparison list and quantity for cart 
data.forEach((item) => {
  item.flag = true;
  item.quantity = 0;
});

const Home = () => {
    const [compareItems, modifyCompareItems] = useState([]);
    const context = useContext(Context);

    const addItem = (id) => {
      const itemId = data.findIndex(x => {
        return x.id === id;
      });
      data[itemId].flag = false;
      modifyCompareItems(y => [...y, data[itemId]]);
    }

    const delItem = (id) => {
      const itemId = data.findIndex(x => {
        return x.id === id;
      });
      data[itemId].flag = true;
      modifyCompareItems(currentItems => {
        return currentItems.filter((y) => y.id!==id);
      });
    }

    const addToCart = (id,price) => {
      context.add(id,price);
    }

    const delFromCart = (id,price) => {
      context.del(id,price);
    }
    
    return (
      <div>     
    <Grid container>
      {data.map((item) => (
        <Grid item xs={12} sm={6} lg={3}>
          <Card style={{maxWidth: 310}} className="card">
       <CardActionArea>
       <img className="product" src={item.img} />
        <CardContent>
          <h2 className="font">{item.name}</h2>
          <div style={{position: 'absolute', right: 10}}>
          <Typography className="font" color="textSecondary" component="h2">
            Rs. {item.price}
          </Typography>
          </div>
          <img src={item.os} style={{width: 40}}/>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {item.flag ? (
        <Button color="primary" onClick={() => addItem(item.id)}>Compare</Button>
      ) : (
        <Button color="secondary" onClick={()=>delItem(item.id)}>Remove</Button>
      )}
        <Button onClick={()=>addToCart(item.id,(item.price))}>+</Button>
        <p>{item.quantity}</p>
        <Button onClick={()=>delFromCart(item.id,(item.price))}>-</Button>
      </CardActions>
    </Card>
        </Grid>
          ))}
      </Grid>
      <div style={{display: 'flex', flexDirection: 'column', width: '100%' }}>
        {compareItems.length!==0 ? ( 
        <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
          <div style={{flex: 1, width: '20%', textAlign: 'center'}}>
            <h3 className="heading">NAME</h3>
          </div>
          <div style={{flex: 1, width: '20%', textAlign: 'center'}}>
            <h3 className="heading">OS</h3>
          </div>
          <div style={{flex: 1, width: '20%', textAlign: 'center'}}>
            <h3 className="heading">CPU</h3>
          </div>
          <div style={{flex: 1, width: '20%', textAlign: 'center'}}>
            <h3 className="heading">PRICE</h3>
          </div>
          <div style={{flex: 1, width: '20%', textAlign: 'center'}}>
            <h3 className="heading">RATING</h3>
          </div>
        </div>):(<h5 style={{fontSize: 30, textAlign: 'center'}} className="font" >ADD ITEMS TO COMPARE</h5>)}
          {compareItems.map((item) => (
            <div style={{display: 'flex', flexDirection: 'row', width: '100%' }}>
          <div style={{flex: 1, width: '20%', textAlign: 'center'}}>
            <p className="font">{item.name}</p>
          </div>
          <div style={{flex: 1, width: '20%', textAlign: 'center'}}>
            <img src={item.os} style={{width: 40, marginTop: 10}}/>
          </div>
          <div style={{flex: 1, width: '20%', textAlign: 'center'}}>
            <img src={item.cpu} style={{width: 40, marginTop: 10}}/>
          </div>
          <div style={{flex: 1, width: '20%', textAlign: 'center'}}>
            <p className="font">Rs. {item.price}</p>
          </div>
          <div style={{flex: 1, width: '20%', textAlign: 'center'}}>
            <p className="font">{item.rating}</p>
          </div>
          </div>
          ))}
      </div>
      </div>
    );
}


export default Home;