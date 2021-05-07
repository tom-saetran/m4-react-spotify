import React from "react"

class NavLeft extends React.Component {
    render() {
        return (
            <div class="col-sm-3 col-md-2">
                <div id="left-navbar" class="d-none d-sm-flex">
                    <div class="container-fluid no-margin">
                        <div class="d-flex flex-column justify-content-between" id="sidebar">
                            <div class="d-flex flex-column align-start top-items ml-2 mt-3 top-icons">
                                <a class="navbar-brand pl-2" href="/">
                                    <img src="./assets/logo1.png" height="40px" width="110px" alt="" />
                                </a>
                                <a class="nav-link active mt-3" href="/">
                                    <i class="fas fa-home"></i>Home<span class="sr-only">(current)</span>
                                </a>
                                <a class="nav-link" href="/">
                                    {" "}
                                    <i class="fas fa-search"></i>Search
                                </a>
                                <a class="nav-link" href="/">
                                    <i class="fas fa-compact-disc"></i>Your Library
                                </a>
                            </div>
                            <div class="mid-icons">
                                <div class="d-flex flex-column align-start top-items ml-2 mt-3 top-icons">
                                    <a onclick="changeCanvas()" class="nav-link active mt-3" href="/">
                                        <i class="fas fa-home"></i>Home Page
                                    </a>
                                    <a onclick="changeCanvas()" class="nav-link" href="/">
                                        <i class="fas fa-search"></i>Artist Page
                                    </a>
                                    <a onclick="changeCanvas()" class="nav-link" href="/">
                                        <i class="fas fa-compact-disc"></i>Album Page
                                    </a>
                                </div>
                            </div>

                            <div class="bottom-icons">
                                <div class="d-flex ml-3">
                                    <a class="nav-link text-muted" href="/">
                                        <i class="fas fa-download"></i>Install App
                                    </a>
                                </div>
                                <hr class="line-break" />
                                <div class="d-flex mb-3">
                                    <img id="profile-pic" src="./assets/pic.jpg" height="25px" alt="" />
                                    <span class="mt-1 ml-2">
                                        <strong>Diego 'Ziba' Banovaz</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavLeft
