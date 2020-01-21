import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as serviceWorker from './serviceWorker';

import NavBar from './app/NavBar';
import App from './app/App';

import AttendenceTracking  from './features/attendenceTracking/AttendenceTracking';
import DashBoard from './features/dashboard/DashBoard';
import EventCalendar from './features/eventCalendar/EventCalendar';
import GuildRoster from './features/guildRoster/GuildRoster';
import LootDropTracker from './features/lootDropTracker/LootDropTracker';
import RaidSignup from './features/raidSignup/RaidSignup';

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
                <Route exact path='/' component={App} />
                <Route exact path='/attendence-tracking' component={AttendenceTracking} />
                <Route exact path='/dashboard' component={DashBoard} />
                <Route exact path='/event-calendar' component={EventCalendar} />
                <Route exact path='/guild-roster' component={GuildRoster} />
                <Route exact path='/loot-drop-tracker' component={LootDropTracker} />
                <Route exact path='/raid-signup' component={RaidSignup} />
            </Switch>
        </ThemeProvider>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
