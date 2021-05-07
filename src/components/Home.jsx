import React from "react"

class Home extends React.Component {
    render() {
        return (
            <div class="col-12 mainPage">
                <div class="row justify-content-center">
                    <div class="col-9 col-lg-11 mainLinks d-md-flex">
                        <a href="/">ROCK</a>
                        <a href="/">POP</a>
                        <a href="/">HIP HOP</a>
                        <a href="/">NEW RELEASES</a>
                        <a href="/">DISCOVER</a>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-10">
                        <div id="search-results" style={{ display: "none" }}>
                            <h2>Search Results</h2>
                            <div id="search-results-list" class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
                        </div>
                        <div id="pending-search-results">
                            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                                <div class="spinner-border text-primary" role="status"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
