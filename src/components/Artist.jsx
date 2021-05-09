import React from "react"
import { Link } from "react-router-dom"
import Spinner from "react-bootstrap/Spinner"
import Image from "react-bootstrap/Image"

class Artist extends React.Component {
    state = {
        artistData: {},
        albumsData: []
    }

    componentDidMount = async () => {
        this.setState({ artistData: await this.props.getData(this.props.match.params.id) })
        this.setState({ albumsData: await this.props.getData(this.props.match.params.id + "/albums") })
    }

    render() {
        return (
            <div className="mainPage">
                <div className="row justify-content-center">
                    {this.state.artistData.nb_fan !== undefined ? (
                        <div className="col-12 pt-5">
                            <img className="rounded-circle center" src={this.state.artistData.picture} alt={this.state.artistData.name} />
                            <h2 className="text-dim text-center pt-2">{this.state.artistData.name}</h2>
                            <div className="text-dim text-center">
                                {this.state.artistData.nb_fan} follower{this.state.artistData.nb_fan === 1 ? "" : "s"}
                            </div>
                        </div>
                    ) : (
                        <div className="pt-5 text-center">
                            <Spinner animation="border" variant="secondary" />
                        </div>
                    )}
                </div>

                {this.state.artistData.nb_album > 0 ? (
                    <div className="row justify-content-center mb-3">
                        <div className="col-11 p-0">
                            <div className="mt-4 d-flex justify-content-start">
                                <h2 className="text-dim font-weight-bold">Albums</h2>
                            </div>
                            <div className="mb-5">
                                <div className="row pb-5">
                                    {this.state.albumsData.data === undefined ? (
                                        <div className="text-center pt-5">
                                            <Spinner animation="border" variant="secondary" />
                                        </div>
                                    ) : (
                                        this.state.albumsData.data.map(album => (
                                            <div key={album.id} className="col-sm-auto col-md-auto mb-3">
                                                <Link to={"/album/" + album.id}>
                                                    <Image fluid src={album.cover} alt={album.title} />
                                                </Link>
                                                <p className="text-dim fit-content">{album.title}</p>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : this.state.artistData.nb_album !== undefined ? (
                    <h2 className="text-dim text-center">No Albums</h2>
                ) : (
                    ""
                )}
            </div>
        )
    }
}

export default Artist
