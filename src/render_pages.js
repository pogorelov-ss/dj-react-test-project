import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import fs from 'fs'

import {routes, routesObj} from './routes'
import template from './template'

routesObj.forEach(route => {
    let html = template(ReactDOMServer.renderToString(
        <StaticRouter
          location={route.path}
          context={{}}
        >
            <div>
                {routes}
            </div>
        </StaticRouter>
    ))
    fs.writeFile(`./app/templates/${route.pageName}.html`, html, err => {
        console.log(`create page: ${route.pageName}`)
        if (err) {
            console.log(err)
        }
    })
})
