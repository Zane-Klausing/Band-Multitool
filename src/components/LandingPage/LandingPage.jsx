import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const useStyle = makeStyles(theme => ({
    root:{

    }
  }))
  const classes = useStyle()
  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="content">
      <h2>{heading}</h2>

      <div>
        <div className="content">
          <Paper>
            <RegisterForm />
          </Paper>
          <center>
            <h4>Already a Member?</h4>
            <Button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </Button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
