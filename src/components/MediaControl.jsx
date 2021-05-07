import React from "react"

class MediaControl extends React.Component {
    render() {
        return (
            <div class="player container-fluid fixed-bottom bg-container pt-1">
                <div class="row flex-nowrap justify-content-between playBar py-3">
                    <div class="col-3">
                        <div class="playerArtistInfo d-flex">
                            <img alt="" />
                            <div class="d-flex flex-column pl-2">
                                <h6>...</h6>
                                <p>...</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="playerControls w-50 d-flex justify-content-between">
                            <a href="/">
                                <img src="playerbuttons/Shuffle.png" alt="shuffle" />
                            </a>
                            <a href="/">
                                <img src="playerbuttons/Previous.png" alt="previous" />
                            </a>
                            <a id="playBtn" href="/" onclick="handlePlay()">
                                <img src="playerbuttons/Play.png" alt="play" />
                            </a>
                            <a href="/">
                                <img src="playerbuttons/Next.png" alt="next" />
                            </a>
                            <a href="/">
                                <img src="playerbuttons/Repeat.png" alt="repeat" />
                            </a>
                        </div>
                        <div class="progressContainer d-flex align-items-center">
                            <span class="currentTime">00:00</span>
                            <div class="progress w-100">
                                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <audio></audio>
                                </div>
                            </div>
                            <span class="duration">00:00</span>
                        </div>
                    </div>
                    <div class="col-auto mr-3">
                        <div class="playerVolume">
                            <i class="fa fa-volume-up" onclick=""></i>
                            <input type="range" value="50" onchange="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MediaControl
