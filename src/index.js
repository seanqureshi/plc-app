import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(

    <Router>
        <MuiThemeProvider>
        <Provider store={store}>
                <App />
        </Provider>
        </MuiThemeProvider>
    </Router>,

    document.getElementById('root'));
unregister();
