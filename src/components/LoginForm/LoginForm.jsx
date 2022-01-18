import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const useStyles = makeStyles({
    btn1: {
        primary: '#393444',
        color: 'Black',
        padding: '5px',
        margin: '6px',
        boxShadow: '1px 2px 8px #111118F0',
        cursor: 'pointer',
        backgroundSize: '200%',
        transition: '0.4s',
        '&:hover': {
        backgroundPosition: 'right'
        },
    },
        btn2:{
            backgroundImage: 'linear-gradient(45deg, #504860, #ffffff)'
        },
        inputStyled:{
            color: 'black',
            '&::placeholder': {
                color: 'black'
            }
        }
})
const classes = useStyles()

  const login = (event) => {
    event.preventDefault();
    

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <Button className={`${classes.btn1} ${classes.btn2}`}
        variant='contained' 
        type="submit" 
        name="submit" 
        value="Log In"
        onClick={login}>
          Log In
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
