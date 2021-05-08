import React from "react"
import { Link } from "react-router-dom"
import Spinner from "react-bootstrap/Spinner"

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
            <div className="col-12 mainPage">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-10 mt-5">
                        <h2 className="text-muted text-center">{this.state.artistData.name}</h2>
                        <div className="text-muted text-center">
                            {this.state.artistData.nb_fan} follower{this.state.artistData.nb_fan === 1 ? "" : "s"}
                        </div>
                    </div>
                </div>

                {this.state.artistData.nb_album > 0 && (
                    <div className="row justify-content-center mb-3">
                        <div className="col-10 col-md-10 col-lg-10 p-0">
                            <div className="mt-4 d-flex justify-content-start">
                                <h2 className="text-muted font-weight-bold">Albums</h2>
                            </div>
                            <div className="pt-5 mb-5">
                                <div className="row">
                                    {this.state.albumsData.data === undefined ? (
                                        <Spinner animation="border" variant="primary" />
                                    ) : (
                                        this.state.albumsData.data.map(album => (
                                            <div key={album.id} className="col-sm-auto col-md-auto mb-3">
                                                <Link to={"/album/" + album.id}>
                                                    <img className="img-fluid" src={album.cover} alt={album.title} />
                                                </Link>
                                                <p className="text-muted fit-content">{album.title}</p>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Artist
