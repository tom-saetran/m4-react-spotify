import React from "react"

class PageNotFound extends React.Component {
    render() {
        return (
            <div className="mainPage">
                <h1 className="text-dim text-center pt-5">404 - Page not found!</h1>
                <h2 className="text-dim text-center">{this.props.location.pathname}</h2>
            </div>
        )
    }
}

export default PageNotFound
