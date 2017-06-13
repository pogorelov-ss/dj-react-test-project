import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import IndexPage from './js/pages/index'
import AuthorizationPage from './js/pages/authorization'
import RegistrationPage from './js/pages/registration'

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={IndexPage} />
            <Route path="/authorization" component={AuthorizationPage} />
            <Route path="/registration" component={RegistrationPage} />
        </div>
    </Router>,
    document.getElementById('react-app')
)
