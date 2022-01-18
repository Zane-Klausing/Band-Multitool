import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import './LoginPage.css'
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core';

function LoginPage() {
  const history = useHistory();
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

  return (
    <div className='loginPage'>
      <LoginForm />

      <center>
        <Button className={`${classes.btn1} ${classes.btn2}`} variant='contained'

          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Button>
      </center>
    </div>
  );
}

export default LoginPage;
