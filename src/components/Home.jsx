import React from "react"

class Home extends React.Component {
    render() {
        return (
            <div class="col-12 mainPage">
                <div class="row justify-content-center">
                    <div class="col-9 col-lg-11 mainLinks d-none d-md-flex">
                        <a id="Rock" href="/">
                            ROCK
                        </a>
                        <a id="Pop" href="/">
                            POP
                        </a>
                        <a id="Hip Hop" href="/">
                            HIP HOP
                        </a>
                        <a href="/">NEW RELEASES</a>
                        <a href="/">DISCOVER</a>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-10">
                        <div id="searchResults" style={{ display: "none" }}>
                            <h2>Search Results</h2>
                            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-10">
                        <div id="results">
                            <h2 class="pl-3 text-white">...</h2>
                            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                                <div>
                                    <div class="spinner-border text-primary" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
