import React from "react"
import Spinner from "react-bootstrap/Spinner"

class Album extends React.Component {
    state = {
        data: null
    }

    componentDidMount = async () => {
        this.setState({ data: await this.props.getData(this.props.match.params.id) })
    }

    render() {
        return (
            <div className="col-12 mainPage">
                {this.state.data !== null ? (
                    <div className="row justify-content-center">
                        <div id="img-container" className="col-md-3 pt-5 text-center">
                            <img src={this.state.data.cover} className="card-img img-fluid" alt="Album" />
                            <div className="mt-4 text-center">
                                <p className="album-title">{this.state.data.title}</p>
                            </div>
                            <div className="text-center">
                                <p className="artist-name">{this.state.data.artist.name}</p>
                            </div>
                            <div className="mt-4 text-center">
                                <button id="btnPlay" className="btn btn-success" type="button">
                                    Play
                                </button>
                            </div>
                        </div>
                        <div className="col-md-8 p-5">
                            <div className="row">
                                <h2 className="text-muted p-2">Tracks</h2>
                                <div id="trackList" className="col-md-10 mb-5">
                                    {this.state.data.tracks.data.map((track, index) => (
                                        <p className="text-muted">{this.state.data.tracks.data.length < 10 ? index + 1 + " : " + track.title : (index < 9 ? "0" : "") + (index + 1) + " : " + track.title}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="pt-5 text-center">
                        <Spinner animation="border" variant="secondary" />
                    </div>
                )}
            </div>
        )
    }
}

export default Album
