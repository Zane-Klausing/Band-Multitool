import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Tools from '../Tools/Tools';
import DatePicker from '../DatePicker/DatePicker';
import './App.css';
import ShowInfo from '../ShowInfo/ShowInfo';
import EditSale from '../ShowInfo/EditSale';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

function App() {
  const dispatch = useDispatch();

  const useStyles = makeStyles({
    root: {
      background: "linear-gradient(45deg, #cb218e 30%, #6617cb 90%)",
      primary: '#5513A8',
      height: '100%',
      marginTop: '40px'


    }
  })
  const classes = useStyles();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);


  return (
      // <Container className={classes.root}>
      <div className='App'>
        <div className ={classes.root}>
        <Router >
          
            <Nav className={classes.root}/>
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />

              {/* Visiting localhost:3000/about will show the about page. */}
              <Route
                // shows AboutPage at all times (logged in or not)
                exact
                path="/about"
              >
                <AboutPage />
              </Route>
              
              <ProtectedRoute
                exact
                path="/tools"
              >
                <Tools />
              </ProtectedRoute>

              <ProtectedRoute
                exact
                path="/showInfo/:id"
              >
                <ShowInfo />
              </ProtectedRoute>


              <ProtectedRoute
                exact
                path="/editSale/:id"
              >
                <EditSale />
              </ProtectedRoute>

              {/* For protected routes, the view could show one of several things on the same route.
                Visiting localhost:3000/user will show the UserPage if the user is logged in.
                If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
                Even though it seems like they are different pages, the user is always on localhost:3000/user */}
              <ProtectedRoute
                // logged in shows UserPage else shows LoginPage
                exact
                path="/user"
              >
                <UserPage />
              </ProtectedRoute>

              <ProtectedRoute
                // logged in shows InfoPage else shows LoginPage
                exact
                path="/info"
              >
                <InfoPage />
              </ProtectedRoute>

              <ProtectedRoute
                // logged in shows InfoPage else shows LoginPage
                exact
                path="/DatePicker"
              >
                <DatePicker />
              </ProtectedRoute>

              <Route
                exact
                path="/login"
              >
                {user.id ?
                  // If the user is already logged in, 
                  // redirect to the /user page
                  <Redirect to="/user" />
                  :
                  // Otherwise, show the login page
                  <LoginPage />
                }
              </Route>

              <Route
                exact
                path="/registration"
              >
                {user.id ?
                  // If the user is already logged in, 
                  // redirect them to the /user page
                  <Redirect to="/user" />
                  :
                  // Otherwise, show the registration page
                  <RegisterPage />
                }
              </Route>

              <Route
                exact
                path="/home"
              >
                {user.id ?
                  // If the user is already logged in, 
                  // redirect them to the /user page
                  <Redirect to="/user" />
                  :
                  // Otherwise, show the Landing page
                  <LandingPage />
                }
              </Route>

              {/* If none of the other routes matched, we will show a 404. */}
              <Route>
                <h1>404</h1>
              </Route>
            </Switch>
            {/* <Footer /> */}
          
        </Router>
      {/* </Container> */}
      </div>
      </div>
  );
}

export default App;
