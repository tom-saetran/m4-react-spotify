import React from "react"
import logo from "../assets/images/logo.png"

class NavLeft extends React.Component {
    state = {
        query: "",
        result: {}
    }

    componentDidUpdate = (_prevProps, _prevState) => {
        if (_prevState.result !== this.state.result) this.props.setSearch(this.state.result)
    }
    render() {
        return (
            <div className="col-2">
                <nav className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
                    <div className="nav-container">
                        <a className="navbar-brand" href="index.html">
                            <img src={logo} alt="Spotify_Logo" width="131" height="40" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <ul>
                                    <li>
                                        <a className="nav-item nav-link" href="index.html">
                                            &nbsp; Home
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-item nav-link" href="/">
                                            <i className="fas fa-book-open fa-lg"></i>&nbsp; Your Library
                                        </a>
                                    </li>
                                    <li>
                                        <div className="input-group mt-3">
                                            <input type="text" value={this.state.query} onChange={e => this.setState({ query: e.target.value })} className="form-control mb-2" id="searchField" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                                            <div className="input-group-append" style={{ marginBottom: "4%" }}>
                                                <button className="btn btn-outline-secondary btn-sm" type="button" id="button-addon1" onClick={async () => this.setState({ result: await this.props.search(this.state.query) })}>
                                                    GO
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="nav-btn">
                        <div className={this.props.loggedInUser ? "d-none" : ""}>
                            <button className="btn signup-btn">Sign Up</button>
                            <button className="btn login-btn">Login</button>
                        </div>
                        <div className={this.props.loggedInUser ? "d-flex" : "d-none"}>
                            <img src={this.props.loggedInUser.useravatar} alt="" width="50px" className="img-fluid" />
                            <div>
                                <h6 className="text-muted">{this.props.loggedInUser.username}</h6>
                                <p className={this.props.loggedInUser.premium ? "text-success" : "d-none"}>Premium User</p>
                            </div>
                        </div>
                        <span>
                            <a href="/">Cookie Policy</a> | <a href="/">Privacy</a>
                        </span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavLeft
