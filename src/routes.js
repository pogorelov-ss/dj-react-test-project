import React from 'react'
import {Route} from 'react-router-dom'

import IndexPage from './js/pages/index'
import AuthorizationPage from './js/pages/authorization'
import RegistrationPage from './js/pages/registration'

let routesObj = [
    {
        exact: true,
        path: '/',
        pageName: 'index',
        component: IndexPage,
    },
    {
        path: '/authorization',
        pageName: 'authorization',
        component: AuthorizationPage,
    },
    {
        path: '/registration',
        pageName: 'registration',
        component: RegistrationPage,
    },
]

let routes = getRoutes(routesObj)

function getRoutes(routesObj) {
    return routesObj.map((route, id) => <Route key={id} {...route} />)
}

export {routesObj, routes}
