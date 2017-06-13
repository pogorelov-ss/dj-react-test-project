import React from 'react'
import {Link} from 'react-router-dom'

class AuthorizationPage extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">index</Link>
                <h1>Authorization</h1>
            </div>
        )
    }
}

export default AuthorizationPage
