import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';
import { useSelector } from 'react-redux';
import { AppBar } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

function Nav() {
  const user = useSelector((store) => store.user);
  const useStyles = makeStyles({
    Home: {
      background: "linear-gradient(45deg, #cb218e 30%, #6617cb 90%)",
      primary: '#5513A8',
      color: 'white',
      padding: '1px',
      margin: '6px'
    },
    NavLink:{
      color: 'white',
      padding: '1px',
      margin: '12px'
    }
  })

  const classes = useStyles();

  return (
    <div className="nav">
      <AppBar color="primary" size='medium'>
        <Toolbar>
        <Button className={classes.Home} variant='contained' size='small'>
      <Link to="/home" className={classes.NavLink}>
        <h2 className={classes.Home}>Band Multi-tool</h2>
      </Link>
      </Button>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className={classes.NavLink} to="/login">
            Login / Register
          </Link>
        }

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
          <Button className={classes.Home} variant='contained' size='small'>
            <Link className={classes.NavLink} to="/home">
              Home
            </Link>
            </Button>
            <Button className={classes.Home} variant='contained' size='small'>
            <Link className={classes.NavLink} to="/info">
              Info Page
            </Link>
            </Button>
            <Button className={classes.Home} variant='contained' size='small'>
            <Link className={classes.NavLink} to="/tools">
              Tools
            </Link>
            </Button>
            <Button className={classes.Home} variant='contained' size='small'>
            <LogOutButton className={classes.Home} />
            </Button>
          </>
        )}
        <Button className={classes.Home} variant='contained' size='small'>
        <Link className={classes.NavLink} to="/about">
          About
        </Link>
        </Button>
      </div>
      </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
