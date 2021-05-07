import React from "react"

class Artist extends React.Component {
    render() {
        return (
            <div id="artists" class="container-fluid d-none p-0">
                <div>
                    <div class="container-fluid no-margin banner">
                        <div id="main" class="d-flex flex-column align-items-center justify-content-end">
                            <img class="bg-image" src="./assets/banner.jpg" alt="" />
                            <h6 class="text-muted mt-5">33,000,575 MONTHLY LISTENERS</h6>
                            <h1>Queen</h1>

                            <div class="buttons mt-3">
                                <button type="button" class="btn btn-sm btn1">
                                    PLAY
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm btn2">
                                    FOLLOW
                                </button>
                                <i class="fas fa-ellipsis-h btn3"></i>
                            </div>

                            <ul class="d-flex mt-5 list">
                                <li class="px-4">
                                    <a onclick="underline1()" href="/">
                                        OVERVIEW
                                    </a>
                                </li>
                                <li class="px-4">
                                    <a onclick="underline1()" href="/">
                                        RELATED ARTISTS
                                    </a>
                                </li>
                                <li class="px-4">
                                    <a onclick="underline1()" href="/">
                                        ABOUT
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="container">
                        <h3 class="mt-4 mb-2">Albums</h3>

                        <div class="row" id="first">
                            <div class="col-sm-6 col-md-2 album card-body">
                                <img src="./assets/1.jfif" class="img-fluid" height="250px" width="250px" alt="" />
                                <h6>Bohemian Rhapsody (The Original Soundtrack)</h6>
                                <span class="text-muted">Queen</span>
                            </div>
                            <div class="col-sm-6 col-md-2 album card-body">
                                <img src="./assets/2.jfif" class="img-fluid" height="250px" width="250px" alt="" />
                                <h6>On Air</h6>
                                <span class="text-muted">Queen</span>
                            </div>
                            <div class="col-sm-6 col-md-2 album card-body">
                                <img src="./assets/3.jfif" class="img-fluid" height="250px" width="250px" alt="" />
                                <h6>A Night At The Odeon</h6>
                                <span class="text-muted">Queen</span>
                            </div>
                            <div class="col-sm-6 col-md-2 album card-body">
                                <img src="./assets/4.jfif" class="img-fluid" height="250px" width="250px" alt="" />
                                <h6>Live At The Rainbow</h6>
                                <span class="text-muted">Queen</span>
                            </div>
                            <div class="col-sm-6 col-md-2 album card-body">
                                <img src="./assets/5.jfif" class="img-fluid" height="250px" width="250px" alt="" />
                                <h6>Live At The Rainbow (Deluxe)</h6>
                                <span class="text-muted">Queen</span>
                            </div>
                            <div class="col-sm-6 col-md-2 album card-body">
                                <img src="./assets/7.jpg" class="img-fluid" height="250px" width="250px" alt="" />
                                <h6>Hungarian Rhapsody (Live In Budapest/1986</h6>
                                <span class="text-muted">Queen</span>
                            </div>

                            <div class="col-sm-6 col-md-2 album card-body">
                                <img src="./assets/album.jpg" class="img-fluid" height="250px" width="250px" alt="" />
                                <h6>Album Name</h6>
                                <span class="text-muted">Queen</span>
                            </div>
                            <div class="col-sm-6 col-md-2 album card-body">
                                <img src="./assets/album.jpg" class="img-fluid" height="250px" width="250px" alt="" />
                                <h6>Album Name</h6>
                                <span class="text-muted">Queen</span>
                            </div>
                            <div class="col-sm-6 col-md-2 album card-body">
                                <img src="./assets/album.jpg" class="img-fluid" height="250px" width="250px" alt="" />
                                <h6>Album Name </h6>
                                <span class="text-muted">Queen</span>
                            </div>
                            <div class="col-sm-6 col-md-2 album card-body">
                                <img src="./assets/album.jpg" class="img-fluid" height="250px" width="250px" alt="" />
                                <h6>Album Name</h6>
                                <span class="text-muted">Queen</span>
                            </div>
                            <div class="col-sm-6 col-md-2 album card-body">
                                <img src="./assets/album.jpg" class="img-fluid" height="250px" width="250px" alt="" />
                                <h6>Album Name</h6>
                                <span class="text-muted">Queen</span>
                            </div>
                            <div class="col-sm-6 col-md-2 album card-body">
                                <img src="./assets/album.jpg" class="img-fluid" height="250px" width="250px" alt="" />
                                <h6>Album Name</h6>
                                <span class="text-muted">Queen</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Artist
