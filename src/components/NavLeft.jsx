import React from "react"
import logo from "../assets/images/logo.png"
import Link from "react-router-dom/Link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHome, faBook, faSearch } from "@fortawesome/free-solid-svg-icons"

library.add(faHome, faBook, faSearch)

class NavLeft extends React.Component {
    state = {
        query: "",
        result: {}
    }

    componentDidUpdate = (_prevProps, _prevState) => {
        if (_prevState.result !== this.state.result) this.props.setSearch(this.state.result)
        if (_prevState.query !== this.state.query) this.props.setQuery(this.state.query)
    }
    render() {
        return (
            <div className="col-2">
                <nav className="navbar fixed-left justify-content-between">
                    <div>
                        <div className="d-flex justify-content-center">
                            <Link to="/" className="pt-3 pb-4">
                                <img src={logo} alt="logo" width="196px" />
                            </Link>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <div className="input-group">
                                        <input style={{ borderColor: "#979ea3", color: "#979ea3", backgroundColor: "#121212" }} type="text" value={this.state.query} className="form-control" onChange={e => this.setState({ query: e.target.value })} placeholder="Search" />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary" type="button" onClick={async () => this.setState({ result: await this.props.search(this.state.query) })}>
                                                <FontAwesomeIcon className="text-dim" icon="search" />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <Link to="/" className="nav-item nav-link text-dim">
                                        <FontAwesomeIcon className="text-dim" icon="home" /> Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/library" className="nav-item nav-link text-dim">
                                        <FontAwesomeIcon className="text-dim" icon="book" /> Library
                                    </Link>
                                </li>
                                <hr />
                                <li>
                                    <Link to="/songs" className="nav-item nav-link text-dim">
                                        <FontAwesomeIcon className="text-dim" icon="book" /> Songs
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/artists" className="nav-item nav-link text-dim">
                                        <FontAwesomeIcon className="text-dim" icon="book" /> Artists
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/albums" className="nav-item nav-link text-dim">
                                        <FontAwesomeIcon className="text-dim" icon="book" /> Albums
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-100">
                        <div className={this.props.user.present ? "d-none" : ""}>
                            <button className="w-100 mb-2 btn btn-success text-light">Sign Up</button>
                            <button className="w-100 mb-2 btn btn-secondary text-light">Login</button>
                            <div className="text-center pb-3">
                                <Link className="text-dim no-underline" to="/cookiepolicy">
                                    Cookie Policy
                                </Link>
                                {" - "}
                                <Link className="text-dim no-underline" to="/privacypolicy">
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                        <div className={this.props.user.present ? "d-flex justify-content-between px-4" : "d-none"}>
                            <img src={this.props.user.useravatar} alt="User Avatar" width="64px" height="64px" className="rounded-circle" />
                            <div className="">
                                <h6 className="text-dim">{this.props.user.username}</h6>
                                <p className={this.props.user.premium ? "text-success" : "d-none"}>Premium User</p>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavLeft
