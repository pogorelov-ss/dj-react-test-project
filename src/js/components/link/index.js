import React from 'react'
import {Link} from 'react-router-dom'

import style from './style.sass'
// import style from './style.styl'

class IndexPage extends React.Component {
    render() {
        return (
            <Link to={this.props.path} className={style.link}>
                {this.props.text}
            </Link>
        )
    }
}

export default IndexPage
