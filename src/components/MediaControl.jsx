import React from "react"

class MediaControl extends React.Component {
    render() {
        return (
            <div class="row d-none d-lg-block m-0">
                <div class="col-12 p-0">
                    <div id="music-control" class="container-fluid">
                        <div class="fixed-bottom navbar-dark bg-dark ">
                            <div class="row d-flex justify-content-between">
                                <div class="col-4 col-sm-6 col-md-4 justify-content-start no-gutters d-md-flex firstbox">
                                    <div class="row">
                                        <div class="col-4 col-sm-4 justify-content-center no-gutters">
                                            <img class="m-2 album" style={{ filter: "none !important" }} src="./assets/QueenCover.jpg" alt="" />
                                        </div>
                                        <div class="col-8 col-sm-8 justify-content-center mt-4 no-gutters">
                                            <p>
                                                Song for my Father{" "}
                                                <span>
                                                    <img class="ml-1 heart" src="./assets/heart.svg" alt="" />
                                                    <img class="ml-1 heart" src="./assets/add.svg" alt="" />
                                                </span>
                                                <br />
                                                <span class="text-muted">
                                                    <small>Queen</small>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-4 col-md-4  d-flex justify-content-center mt-2 media-bar">
                                    <div class="container ">
                                        <div class="row justify-content-center p-2">
                                            <img class="m-1 p-2 multi-media" src="./assets/shuffle-crossing-arrows.svg" alt="" />
                                            <img class="m-1 p-2 multi-media" src="./assets/previous.svg" alt="" />
                                            <img class="m-1 " src="./assets/play-button.svg" alt="" />
                                            <img class="m-1 multi-media p-2" src="./assets/next.svg" alt="" />
                                            <img class="m-1 multi-media p-2" src="./assets/exchange.svg" alt="" />
                                        </div>

                                        <div class="row">
                                            <div class="slidecontainer">
                                                <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-4 col-md-4 col-sm-6 d-none d-sm-flex justify-content-end">
                                    <div class="mt-5 mr-3 d-flex">
                                        <img class="mr-3" style={{ height: "30px!important", width: "30px !important" }} src="./assets/document.svg" alt="" />
                                        <img class="mr-3" style={{ height: "30px!important", width: "30px !important" }} src="./assets/personal-computer.svg" alt="" />
                                        <img class="mr-3" style={{ height: "30px!important", width: "30px !important" }} src="./assets/speaker-filled-audio-tool.svg" alt="" />
                                        <div class="slidecontainer">
                                            <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MediaControl
