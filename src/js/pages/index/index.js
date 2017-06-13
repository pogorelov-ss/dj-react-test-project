import React from 'react'
import {Link} from 'react-router-dom'

class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <Link to="/authorization">my authorization</Link>
                <br/>
                <Link to="/registration">registration</Link>
                <h1>Index</h1>
            </div>
        )
    }
}

export default IndexPage
