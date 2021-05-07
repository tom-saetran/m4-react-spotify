import React from "react"

class NavLeft extends React.Component {
    render() {
        return (
            <div class="col-2">
                <nav class="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
                    <div class="nav-container">
                        <a class="navbar-brand" href="index.html">
                            <img src="logo/Spotify_Logo.png" alt="Spotify_Logo" width="131" height="40" />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <ul>
                                    <li>
                                        <a class="nav-item nav-link" href="index.html">
                                            <i class="fas fa-home fa-lg"></i>&nbsp; Home
                                        </a>
                                    </li>
                                    <li>
                                        <a class="nav-item nav-link" href="/">
                                            <i class="fas fa-book-open fa-lg"></i>&nbsp; Your Library
                                        </a>
                                    </li>
                                    <li>
                                        <div class="input-group mt-3">
                                            <input type="text" class="form-control mb-2" id="searchField" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                                            <div class="input-group-append" style={{ marginBottom: "4%" }}>
                                                <button class="btn btn-outline-secondary btn-sm" type="button" id="button-addon1" onclick="search()">
                                                    GO
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="nav-btn">
                        <button class="btn signup-btn" type="button">
                            Sign Up
                        </button>
                        <button class="btn login-btn" type="button">
                            Login
                        </button>
                        <a href="/">Cookie Policy</a> |<a href="/"> Privacy</a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavLeft
