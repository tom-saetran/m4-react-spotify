import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faPlay, faStepForward, faStepBackward, faPause, faSync, faRandom, faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons"

library.add(faPlay, faStepBackward, faStepForward, faPause, faPlay, faSync, faRandom, faVolumeUp, faVolumeMute)

class MediaControl extends React.Component {
    state = {
        paused: false,
        stopped: true,
        muted: false,
        volume: 50,
        repeat: false,
        shuffle: false,
        media: null
    }

    doStartPlay = () => {
        //
    }

    doStopPlay = () => {
        //
    }

    doPausePlay = () => {
        //
    }

    doNextTrack = () => {
        //
    }

    doPrevTrack = () => {
        //
    }

    doSeekTo = () => {
        //
    }

    render() {
        return (
            <div className="player container-fluid fixed-bottom bg-container pt-1">
                <div className="row flex-nowrap justify-content-between playBar py-3">
                    <div className="col-3">
                        <div className="playerArtistInfo d-flex">
                            <img src={this.props.nowPlaying.albumUrl} alt="" width="50px" className="img-fluid" />
                            <div className="d-flex flex-column pl-2">
                                <h6 className="pl-3">{this.props.nowPlaying.artist}</h6>
                                <p className="pl-3">{this.props.nowPlaying.song}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="playerControls w-50 d-flex justify-content-between">
                            <FontAwesomeIcon
                                onMouseEnter={e => {
                                    if (!this.state.shuffle) e.currentTarget.classList.replace("text-muted", "text-dim")
                                }}
                                onMouseLeave={e => {
                                    if (!this.state.shuffle) e.currentTarget.classList.replace("text-dim", "text-muted")
                                }}
                                onClick={() => {
                                    this.setState({ shuffle: !this.state.shuffle })
                                }}
                                className={this.state.shuffle ? "text-light" : "text-muted"}
                                icon="random"
                            />
                            <FontAwesomeIcon
                                onMouseEnter={e => {
                                    e.currentTarget.classList.replace("text-muted", "text-dim")
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.classList.replace("text-dim", "text-muted")
                                }}
                                onClick={() => {
                                    //
                                }}
                                className="text-muted"
                                icon="step-backward"
                            />
                            <FontAwesomeIcon
                                onMouseEnter={e => {
                                    e.currentTarget.classList.replace("text-muted", "text-dim")
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.classList.replace("text-dim", "text-muted")
                                }}
                                onClick={() => {
                                    if (this.state.media !== null) {
                                        if (this.state.paused || this.state.stopped) this.doStartPlay()
                                        else this.doPausePlay()
                                        this.setState({ paused: !this.state.paused })
                                    }
                                }}
                                className="text-muted"
                                icon={this.state.paused ? "pause" : "play"}
                            />
                            <FontAwesomeIcon
                                onMouseEnter={e => {
                                    e.currentTarget.classList.replace("text-muted", "text-dim")
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.classList.replace("text-dim", "text-muted")
                                }}
                                onClick={() => {
                                    //
                                }}
                                className="text-muted"
                                icon="step-forward"
                            />
                            <FontAwesomeIcon
                                onMouseEnter={e => {
                                    if (!this.state.repeat) e.currentTarget.classList.replace("text-muted", "text-dim")
                                }}
                                onMouseLeave={e => {
                                    if (!this.state.repeat) e.currentTarget.classList.replace("text-dim", "text-muted")
                                }}
                                onClick={() => {
                                    this.setState({ repeat: !this.state.repeat })
                                }}
                                className={this.state.repeat ? "text-light" : "text-muted"}
                                icon="sync"
                            />
                        </div>
                        <div className="progressContainer d-flex align-items-center">
                            <span className="currentTime">00:00</span>
                            <div className="progress w-100">
                                <div className="progress-bar" role="progressbar">
                                    <audio></audio>
                                </div>
                            </div>
                            <span className="duration">00:00</span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="playerVolume">
                            <FontAwesomeIcon
                                onMouseEnter={e => {
                                    e.currentTarget.classList.replace("text-muted", "text-dim")
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.classList.replace("text-dim", "text-muted")
                                }}
                                onClick={() => {
                                    this.setState({ muted: !this.state.muted })
                                }}
                                className="text-muted"
                                icon={this.state.muted ? "volume-mute" : "volume-up"}
                            />
                            <input
                                onChange={e => {
                                    this.setState({ volume: e.target.value })
                                }}
                                value={this.state.volume}
                                type="range"
                                max="100"
                                min="0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MediaControl
