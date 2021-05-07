import React from "react"

class MediaControl extends React.Component {
    render() {
        return (
            <div className="player container-fluid fixed-bottom bg-container pt-1">
                <div className="row flex-nowrap justify-content-between playBar py-3">
                    <div className="col-3">
                        <div className="playerArtistInfo d-flex">
                            <img alt="" />
                            <div className="d-flex flex-column pl-2">
                                <h6>...</h6>
                                <p>...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="playerControls w-50 d-flex justify-content-between">
                            <a href="/">
                                <img src="images/shuffle.png" alt="shuffle" />
                            </a>
                            <a href="/">
                                <img src="images/previous.png" alt="previous" />
                            </a>
                            <a id="playBtn" href="/" onClick="handlePlay()">
                                <img src="images/play.png" alt="play" />
                            </a>
                            <a href="/">
                                <img src="images/next.png" alt="next" />
                            </a>
                            <a href="/">
                                <img src="images/repeat.png" alt="repeat" />
                            </a>
                        </div>
                        <div className="progressContainer d-flex align-items-center">
                            <span className="currentTime">00:00</span>
                            <div className="progress w-100">
                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <audio></audio>
                                </div>
                            </div>
                            <span className="duration">00:00</span>
                        </div>
                    </div>
                    <div className="col-auto mr-3">
                        <div className="playerVolume">
                            <i className="fa fa-volume-up" onClick=""></i>
                            <input type="range" value="50" onChange="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MediaControl
