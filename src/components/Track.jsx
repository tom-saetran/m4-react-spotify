import React from "react"
import { Link } from "react-router-dom"
import Spinner from "react-bootstrap/Spinner"

class Track extends React.Component {
    state = {
        trackData: {}
    }

    componentDidMount = async () => {
        this.setState({ trackData: await this.props.getData(this.props.match.params.id) })
    }

    formatTime = time => {
        let seconds = time
        let minutes = 0
        while (seconds - 60 >= 0) {
            seconds -= 60
            minutes++
        }
        if (seconds < 10) seconds = "0" + seconds.toString()
        if (minutes < 10) minutes = "0" + minutes.toString()
        return minutes + ":" + seconds
    }

    render() {
        return (
            <div className="mainPage">
                <div className="row justify-content-center">
                    {this.state.trackData.id !== undefined ? (
                        <div className="col-12 pt-5">
                            <Link className="no-underline" to={"/album/" + this.state.trackData.album.id}>
                                <img className="rounded-circle center" src={this.state.trackData.album.cover} alt={this.state.trackData.title_short} />
                            </Link>
                            <div className="text-dim text-center pt-2">{this.state.trackData.title}</div>
                            <div className="text-dim text-center">{this.formatTime(this.state.trackData.duration)}</div>
                            <Link className="no-underline" to={"/artist/" + this.state.trackData.artist.id}>
                                <div className="link-dim text-center">by {this.state.trackData.artist.name}</div>
                            </Link>
                        </div>
                    ) : (
                        <div className="pt-5 text-center">
                            <Spinner animation="border" variant="secondary" />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Track
