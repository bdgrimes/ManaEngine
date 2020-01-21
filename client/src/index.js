import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as serviceWorker from './serviceWorker';

import NavBar from './app/NavBar';
import App from './app/App';

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const routing = (
    <Router>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <NavBar />
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </ThemeProvider>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
