import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';
import { useSelector } from 'react-redux';
import { AppBar, Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

function Nav() {
  const user = useSelector((store) => store.user);
  const useStyles = makeStyles({
    btn1: {
      primary: '#393444',
      color: 'Black',
      padding: '1px',
      margin: '6px',
      boxShadow: '1px 2px 8px #111118F0',
      cursor: 'pointer',
      backgroundSize: '200%',
      transition: '0.4s',
      '&:hover': {
        backgroundPosition: 'right'
      },
    },
    NavLink:{
      color: 'Black',
      padding: '1px',
      margin: '8px'
    },
    LogOut:{
      border: 'none',
      primary: '#393444',
      color: 'Black',
      padding: '1px',
      margin: '6px',
      boxShadow: '1px 2px 8px #111118F0',
      cursor: 'pointer',
      backgroundSize: '200%',
      transition: '0.4s',
      '&:hover': {
        backgroundPosition: 'right'
      },
      position:'right'
    },
    btn2:{
      backgroundImage: 'linear-gradient(45deg, #504860, #ffffff)'
    }
  })

  const classes = useStyles();

  return (
    <div className="nav">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar color="primary" size='medium'>
        <Toolbar>
        <Button className={`${classes.btn1} ${classes.btn2}`} variant='contained' size='small'>
      <Link to="/home" className={classes.NavLink}>
        <h2 >Band Multi-tool</h2>
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
          {/* <Button className={classes.Home} variant='contained' size='small'>
            <Link className={classes.NavLink} to="/home">
              Home
            </Link>
            </Button> */}
            {/* <Button className={classes.Home} variant='contained' size='small'>
            <Link className={classes.NavLink} to="/info">
              Info Page
            </Link>
            </Button> */}
            <Button className={`${classes.btn1} ${classes.btn2}`} sx={{marginRight: 100}}variant='contained' size='small'>
            <Link className={classes.NavLink} to="/tools">
              Tools
            </Link>
            </Button>
          </>
        )}
        <Button className={`${classes.btn1} ${classes.btn2}`} variant='contained' size='small'>
        <Link className={classes.NavLink} to="/about">
          About
        </Link>
        </Button>
        {user.id && (
          <Button className={`${classes.LogOut} ${classes.btn2}`} variant='contained' size='small'>
          <LogOutButton />
          </Button>
        )}
      </div>
      </Toolbar>
      </AppBar>
      </Box>
    </div>
  );
}

export default Nav;
