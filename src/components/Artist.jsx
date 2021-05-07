import React from "react"

class Artist extends React.Component {
    render() {
        return (
            <div className="col-12 mainPage">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-10 mt-5">
                        <h2 className="titleMain">STING</h2>
                        <div id="followers">1154386 followers</div>
                        <div className="d-flex justify-content-center" id="button-container">
                            <button className="btn btn-success mr-2 mainButton" id="playButton">
                                PLAY
                            </button>
                            <button className="btn btn-outline-light mainButton" id="followButton">
                                FOLLOW
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mb-3">
                    <div className="col-10 col-md-10 col-lg-10 p-0">
                        <div className="mt-4 d-flex justify-content-start">
                            <h2 className="text-white font-weight-bold">Tracks</h2>
                        </div>
                        <div className="pt-5 mb-5">
                            <div className="row" id="apiLoaded">
                                <div className="col-sm-auto col-md-auto text-center mb-5">
                                    <a href="/album_page.html">
                                        <img className="img-fluid" src="https://cdns-images.dzcdn.net/images/cover/e2491c22fb19c154e46b449ff7aa7a62/250x250-000000-80-0-0.jpg" alt="1" />
                                    </a>
                                    <p>
                                        <a href="/"> Track: "Shape Of My Hear..." </a>
                                        <br />
                                        <a href="/"> Album: "Ten Summoner's T..." </a>
                                    </p>
                                </div>
                                <div className="col-sm-auto col-md-auto text-center mb-5">
                                    <a href="/album_page.html">
                                        <img className="img-fluid" src="https://cdns-images.dzcdn.net/images/cover/43216748bbeee4aa12f3e2407599a4ea/250x250-000000-80-0-0.jpg" alt="1" />
                                    </a>
                                    <p>
                                        <a href="/"> Track: "Russians" </a>
                                        <br />
                                        <a href="/"> Album: "Fields Of Gold -..." </a>
                                    </p>
                                </div>
                                <div className="col-sm-auto col-md-auto text-center mb-5">
                                    <a href="/album_page.html">
                                        <img className="img-fluid" src="https://cdns-images.dzcdn.net/images/cover/b868c72b8514a61a7a34e0495c5584e1/250x250-000000-80-0-0.jpg" alt="1" />
                                    </a>
                                    <p>
                                        <a href="/"> Track: "Every Breath You..." </a>
                                        <br />
                                        <a href="/"> Album: "My Songs (Deluxe..." </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Artist
