import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './components/App/App';
import { ThemeProvider, createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: { main: '#393444'},
    secondary: { main: '#b21f9e'},

  }
})

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('react-root'),
);
