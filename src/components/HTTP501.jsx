import React from "react"

class HTTP501 extends React.Component {
    render() {
        return (
            <div className="mainPage">
                <h1 className="text-dim text-center pt-5">501 - Not Implemented!</h1>
                <h2 className="text-dim text-center">
                    The resource at <span className="text-success">{this.props.location.pathname}</span> is not yet implemented.
                </h2>
                <h3 className="text-dim text-center">Try again later...</h3>
                <h4 className="text-dim text-center">Hooray!</h4>
            </div>
        )
    }
}

export default HTTP501
