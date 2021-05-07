import React from "react"

class Home extends React.Component {
    render() {
        return (
            <div id="frontpage" class="container p-0">
                <div class="container-fluid p-0">
                    <div class="container-fluid album-container p-5" style={{ height: "100vh" }}>
                        <nav class="navbar navbar-expand-md navbar-dark bg-none">
                            <div class="container-fluid justify-content-center ">
                                <div class=" " style={{ "flex-grow": 0 }} id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                                        <li class="nav-item">
                                            <a class="nav-link" onclick="underline()" href="/">
                                                TRENDING
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" onclick="underline()" href="/">
                                                PODCAST
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" onclick="underline()" href="/">
                                                MOODS AND GENERE
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" onclick="underline()" href="/">
                                                NEW RELEASES
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" onclick="underline()" href="/">
                                                DISCOVER
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <h2 class="mt-5 text-break pl-5">#THROWBACKTHURSDAY</h2>

                        <div class="row row-cols-2 row-cols-lg-6 g-2 g-lg-3 my-3 pl-5">
                            <div class="col card-karaoke">
                                <div class="card">
                                    <img src="https://upload.wikimedia.org/wikipedia/en/d/df/RedHotChiliPeppersCalifornication.jpg" class="card-img-top" alt="..." />
                                    <img src="./assets/811-8110601_spotify-logo-transparent-background-transparent-spotify-logo-black.png" class="card-img-top logo-spotify-copyright" alt="..." />
                                </div>
                                <p>italian karaoke</p>
                            </div>

                            <div class="col card-karaoke justify-content-center">
                                <div class="card ">
                                    <img src="./assets/Queen_The_Miracle.png" class="card-img-top" alt="..." />
                                    <img src="./assets/811-8110601_spotify-logo-transparent-background-transparent-spotify-logo-black.png" class="card-img-top logo-spotify-copyright" alt="..." />
                                </div>
                                <p>italianish karaoke</p>
                            </div>

                            <div class="col card-karaoke">
                                <div class="card">
                                    <img src="./assets/91Ph+uTyyxL._AC_SL1500_.jpg" class="card-img-top" alt="..." />
                                    <img src="./assets/811-8110601_spotify-logo-transparent-background-transparent-spotify-logo-black.png" class="card-img-top logo-spotify-copyright" alt="..." />
                                </div>
                                <p>italian karaoke</p>
                            </div>
                            <div class="col card-karaoke">
                                <div class="card">
                                    <img src="./assets/lze4funhxmr41.jpg" class="card-img-top" alt="..." />
                                    <img src="./assets/811-8110601_spotify-logo-transparent-background-transparent-spotify-logo-black.png" class="card-img-top logo-spotify-copyright" alt="..." />
                                </div>
                                <p>italian karaoke</p>
                            </div>
                            <div class="col card-karaoke">
                                <div class="card">
                                    <img src="./assets/Queen_The_Miracle.png" class="card-img-top" alt="..." />
                                    <img src="./assets/811-8110601_spotify-logo-transparent-background-transparent-spotify-logo-black.png" class="card-img-top logo-spotify-copyright" alt="..." />
                                </div>
                                <p>italian karaoke</p>
                            </div>
                            <div class="col card-karaoke">
                                <div class="card">
                                    <img src="./assets/SharedImage-8021.jpg" class="card-img-top" alt="..." />
                                    <img src="./assets/811-8110601_spotify-logo-transparent-background-transparent-spotify-logo-black.png" class="card-img-top logo-spotify-copyright" alt="..." />
                                </div>
                                <p>italian karaoke</p>
                            </div>
                        </div>

                        <h2 class="mt-5 pl-5">Classifiche</h2>
                        <div class="row row-cols-2 row-cols-lg-6 g-2 g-lg-3 my-3 pl-5">
                            <div class="col card-karaoke ">
                                <div class="card">
                                    <img src="./assets/42a5def8d3ba26643779afc8708239f4.jpg" class="card-img-top" alt="..." />
                                    <img src="./assets/811-8110601_spotify-logo-transparent-background-transparent-spotify-logo-black.png" class="card-img-top logo-spotify-copyright" alt="..." />
                                </div>
                                <p>italian karaoke</p>
                            </div>
                            <div class="col card-karaoke">
                                <div class="card">
                                    <img src="./assets/71CT3oWpR6L._AC_SX522_.jpg" class="card-img-top" alt="..." />
                                    <img src="./assets/811-8110601_spotify-logo-transparent-background-transparent-spotify-logo-black.png" class="card-img-top logo-spotify-copyright" alt="..." />
                                </div>
                                <p>italian karaoke</p>
                            </div>
                            <div class="col card-karaoke">
                                <div class="card">
                                    <img src="./assets/download.jpg" class="card-img-top" alt="..." />
                                    <img src="./assets/811-8110601_spotify-logo-transparent-background-transparent-spotify-logo-black.png" class="card-img-top logo-spotify-copyright" alt="..." />
                                </div>
                                <p>italian karaoke</p>
                            </div>
                            <div class="col card-karaoke">
                                <div class="card">
                                    <img src="./assets/Michaeljacksondangerous.jpg" class="card-img-top" alt="..." />
                                    <img src="./assets/811-8110601_spotify-logo-transparent-background-transparent-spotify-logo-black.png" class="card-img-top logo-spotify-copyright" alt="..." />
                                </div>
                                <p>italian karaoke</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
