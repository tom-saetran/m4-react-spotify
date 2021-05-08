import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "react-router-dom/Link"

class Home extends React.Component {
    state = {
        data: null
    }

    componentDidMount = () => {
        this.setState({ data: this.props.searchResults })
    }

    componentDidUpdate = (_prevProps, _prevState) => {
        if (_prevState.data !== this.props.searchResults) this.setState({ data: this.props.searchResults })
    }

    render() {
        return (
            <div className="col-12 mainPage">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div style={{ display: this.state.data === null ? "none" : "" }}>
                            <h2 className="text-center text-muted pt-3">Search Results</h2>
                            {this.state.data !== null && this.state.data.data.length === 0 && <p className="text-center text-dim">No results</p>}
                            <div className="row py-5">
                                {this.state.data !== null &&
                                    this.state.data.data.map(result => (
                                        <div key={result.id} className="col-sm-auto col-md-auto mb-3 text-dim py-2">
                                            <Link to={"/album/" + result.album.id}>
                                                <img src={result.album.cover} alt={result.album.id} />
                                            </Link>
                                            <Link className="text-dim no-underline" to={"/artist/" + result.artist.id}>
                                                <h4 className="fit-content m-0">{result.artist.name}</h4>
                                            </Link>
                                            <h6 className="fit-content m-0">
                                                <small>{result.album.title}</small>
                                            </h6>
                                            <p className="fit-content m-0">
                                                <small>{result.title}</small>
                                            </p>
                                        </div>
                                    ))}
                                <div className="pb-5" />
                            </div>
                        </div>
                        {this.state.data === null && <FontAwesomeIcon className="w-100 text-muted mt-5" size="5x" icon="sync" spin />}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
