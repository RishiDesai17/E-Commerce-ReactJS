import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from './components/home';
import Cart from './components/cart';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';

const App = () => {
  return(
    <BrowserRouter>
      <div>
      <div className="App">
      <AppBar position="static" style={{backgroundColor: 'green'}}>
        <Toolbar>
        <Typography variant="h6">
          Online Shopping
        </Typography>
          <Link to="/cart">
            <Button style={{position:'absolute', right: 20, top: 8}}><ShoppingCartIcon style={{fontSize: 40, color: 'white'}}/></Button>
          </Link>
          <Link to="/">
            <Button color="inherit" style={{position:'absolute', right: 80, top: 8}}><HomeIcon style={{fontSize: 40, color: 'white'}}/></Button>
          </Link>
        </Toolbar>
        </AppBar>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}
export default App;
