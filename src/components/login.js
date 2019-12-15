import React,{useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Context} from '../context/Context';
import auth from '../auth';

const PASSWORD='pass123';

const useStyles = makeStyles(theme => ({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center'
    },
    avatar: {
      backgroundColor: "green",
    },
    form: {
      width: '100%'
    },
  }));

const Login = (props) => {
    const [password,setPassword] = useState("");
    const [username,setUsername] = useState("");
    const context = useContext(Context);
    const classes = useStyles();

    const transfer = (u) => {
      context.transfer(u);
    }
    return(
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper} style={{marginTop: '33%'}}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography style={{marginBottom: 30}} component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
                id="outlined-read-only-input"
                label="Username"
                required
                fullWidth
                variant="outlined"
                onChange={(event)=>setUsername(event.target.value)}
            />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            style={{marginBottom: 40}}
            onChange={(event)=>setPassword(event.target.value)}
          />
          <Link to="/" className="link">
          <Button
            type="submit"
            style={{width: 100, backgroundColor: 'green'}}
            variant="contained"
            onClick={() => {
                if(PASSWORD===password){
                 auth.login();
                 transfer(username);
               }
               }}
          >
            <Typography style={{color: 'white'}}>Sign In</Typography>
          </Button>
          </Link>
        </form>
      </div>
    </Container>
        
    )
}

export default Login;