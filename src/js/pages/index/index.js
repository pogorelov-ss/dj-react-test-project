import React from 'react'

import Link from '../../components/link'

class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Link path="/authorization" text="authorization" />
                    <Link path="/registration" text="registration" />
                </div>
                <h1>Index</h1>
            </div>
        )
    }
}

export default IndexPage
