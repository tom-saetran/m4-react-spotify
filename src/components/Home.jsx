import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

library.add(faCoffee)

class Home extends React.Component {
    state = {}

    render() {
        return (
            <div className="col-12 mainPage">
                <div className="row justify-content-center">
                    <div className="col-9 col-lg-11 mainLinks d-md-flex">
                        <a href="/">ROCK</a>
                        <a href="/">POP</a>
                        <a href="/">HIP HOP</a>
                        <a href="/">NEW RELEASES</a>
                        <a href="/">DISCOVER</a>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div id="search-results" style={{ display: "none" }}>
                            <h2>Search Results</h2>
                            <div id="search-results-list" className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
                        </div>
                        <div id="pending-search-results">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                                {/*<div class="spinner-border text-primary" role="status"></div>*/}
                                <p>
                                    <FontAwesomeIcon size="5x" icon="coffee" spin />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
