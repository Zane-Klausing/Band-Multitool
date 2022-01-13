import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const useStyle = makeStyles(theme => ({
    root:{

    }
  }))
  const classes = useStyle()

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className={classes.root} onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <Grid container>
        <Grid item xs={6}>
          <div>
              <TextField
                variant="outlined"
                type="text"
                label="Username"
                name="username"
                value={username}
                required
                onChange={(event) => setUsername(event.target.value)}
              />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
              <TextField
                variant="outlined"
                label="Password"
                type="password"
                name="password"
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
              />
          </div>
        </Grid>
      </Grid>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
