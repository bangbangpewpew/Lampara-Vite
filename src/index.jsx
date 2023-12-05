import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import ViewSchedule from './views/view-schedule'
import ScheduleNurses from './views/schedule-nurses'
import Nurses from './views/nurses'
import ForgotPassword from './views/forgot-password'
import Dashboard from './views/dashboard'
import DashboardNurses from './views/dashboard-nurses'
import ChangePassword from './views/change-password'
import Home from './views/home'
import Messages from './views/messages'
import MessagesNurses from './views/messages-nurses'
import Account from './views/account'
import NotFound from './views/not-found'
import AccountNurses from './views/account-nurses'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={ViewSchedule} exact path="/view-schedule" />
        <Route component={ScheduleNurses} exact path="/schedule-nurses" />
        <Route component={Nurses} exact path="/nurses" />
        <Route component={ForgotPassword} exact path="/forgot-password" />
        <Route component={Dashboard} exact path="/dashboard" />
        <Route component={DashboardNurses} exact path="/dashboard-nurses" />
        <Route component={ChangePassword} exact path="/change-password" />
        <Route component={Home} exact path="/" />
        <Route component={Messages} exact path="/messages" />
        <Route component={MessagesNurses} exact path="/messages-nurses" />
        <Route component={Account} exact path="/account" />
        <Route component={AccountNurses} exact path="/account-nurses" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
