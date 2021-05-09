import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/styles.css"
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavLeft from "./components/NavLeft"
import Home from "./components/Home"
import Artist from "./components/Artist"
import Album from "./components/Album"
import MediaControl from "./components/MediaControl"
import PageNotFound from "./components/PageNotFound"
import HTTP501 from "./components/HTTP501"
import Track from "./components/Track"

class App extends React.Component {
    state = {
        nowPlaying: {
            id: 130105298,
            readable: true,
            title: "Set The Roof",
            title_short: "Set The Roof",
            title_version: "",
            isrc: "USUM71603296",
            link: "https://www.deezer.com/track/130105298",
            share: "https://www.deezer.com/track/130105298?utm_source=deezer&utm_content=track-130105298&utm_term=0_1620597097&utm_medium=web",
            duration: 205,
            track_position: 7,
            disk_number: 1,
            rank: 283452,
            release_date: "2016-08-12",
            explicit_lyrics: true,
            explicit_content_lyrics: 1,
            explicit_content_cover: 1,
            preview: "https://cdns-preview-6.dzcdn.net/stream/c-6dd8dc0a52bde9104c7ca7f387180c7e-6.mp3",
            bpm: 97.05,
            gain: -11.7,
            available_countries: [
                "AE",
                "AF",
                "AG",
                "AI",
                "AL",
                "AM",
                "AO",
                "AQ",
                "AR",
                "AS",
                "AT",
                "AU",
                "AZ",
                "BA",
                "BB",
                "BD",
                "BE",
                "BG",
                "BH",
                "BI",
                "BJ",
                "BO",
                "BQ",
                "BR",
                "BT",
                "BV",
                "BW",
                "CA",
                "CC",
                "CD",
                "CF",
                "CG",
                "CH",
                "CI",
                "CK",
                "CL",
                "CM",
                "CO",
                "CR",
                "CU",
                "CV",
                "CW",
                "CX",
                "CY",
                "CZ",
                "DE",
                "DJ",
                "DK",
                "DM",
                "DZ",
                "EC",
                "EE",
                "EG",
                "EH",
                "ER",
                "ES",
                "ET",
                "FI",
                "FJ",
                "FK",
                "FM",
                "FR",
                "GA",
                "GB",
                "GD",
                "GE",
                "GH",
                "GM",
                "GN",
                "GQ",
                "GR",
                "GS",
                "GT",
                "GU",
                "GW",
                "HK",
                "HM",
                "HN",
                "HR",
                "HU",
                "ID",
                "IE",
                "IL",
                "IN",
                "IQ",
                "IR",
                "IS",
                "IT",
                "JM",
                "JO",
                "JP",
                "KE",
                "KG",
                "KH",
                "KI",
                "KM",
                "KN",
                "KP",
                "KR",
                "KW",
                "KY",
                "KZ",
                "LA",
                "LB",
                "LC",
                "LK",
                "LR",
                "LS",
                "LT",
                "LU",
                "LV",
                "LY",
                "MA",
                "MD",
                "ME",
                "MG",
                "MH",
                "MK",
                "ML",
                "MM",
                "MN",
                "MP",
                "MR",
                "MS",
                "MT",
                "MU",
                "MV",
                "MW",
                "MX",
                "MY",
                "MZ",
                "NA",
                "NE",
                "NF",
                "NG",
                "NI",
                "NL",
                "NO",
                "NR",
                "NU",
                "NZ",
                "OM",
                "PA",
                "PE",
                "PG",
                "PH",
                "PK",
                "PL",
                "PN",
                "PS",
                "PT",
                "PW",
                "PY",
                "QA",
                "RO",
                "RS",
                "RU",
                "RW",
                "SA",
                "SB",
                "SC",
                "SD",
                "SE",
                "SG",
                "SI",
                "SJ",
                "SK",
                "SL",
                "SN",
                "SO",
                "ST",
                "SV",
                "SX",
                "SY",
                "SZ",
                "TC",
                "TD",
                "TG",
                "TH",
                "TJ",
                "TK",
                "TL",
                "TM",
                "TN",
                "TO",
                "TR",
                "TV",
                "TZ",
                "UA",
                "UG",
                "US",
                "UY",
                "VC",
                "VE",
                "VG",
                "VI",
                "VN",
                "VU",
                "WS",
                "YE",
                "ZA",
                "ZM",
                "ZW"
            ],
            contributors: [
                {
                    id: 5575762,
                    name: "Rae Sremmurd",
                    link: "https://www.deezer.com/artist/5575762",
                    share: "https://www.deezer.com/artist/5575762?utm_source=deezer&utm_content=artist-5575762&utm_term=0_1620597097&utm_medium=web",
                    picture: "https://api.deezer.com/artist/5575762/image",
                    picture_small: "https://cdns-images.dzcdn.net/images/artist/a79d2c8dfcf5ec86ae5d04f5f582a518/56x56-000000-80-0-0.jpg",
                    picture_medium: "https://cdns-images.dzcdn.net/images/artist/a79d2c8dfcf5ec86ae5d04f5f582a518/250x250-000000-80-0-0.jpg",
                    picture_big: "https://cdns-images.dzcdn.net/images/artist/a79d2c8dfcf5ec86ae5d04f5f582a518/500x500-000000-80-0-0.jpg",
                    picture_xl: "https://cdns-images.dzcdn.net/images/artist/a79d2c8dfcf5ec86ae5d04f5f582a518/1000x1000-000000-80-0-0.jpg",
                    radio: true,
                    tracklist: "https://api.deezer.com/artist/5575762/top?limit=50",
                    type: "artist",
                    role: "Main"
                },
                {
                    id: 110587,
                    name: "Lil Jon",
                    link: "https://www.deezer.com/artist/110587",
                    share: "https://www.deezer.com/artist/110587?utm_source=deezer&utm_content=artist-110587&utm_term=0_1620597097&utm_medium=web",
                    picture: "https://api.deezer.com/artist/110587/image",
                    picture_small: "https://cdns-images.dzcdn.net/images/artist/31cc6dde2833e7cadacfe5b29be08cf3/56x56-000000-80-0-0.jpg",
                    picture_medium: "https://cdns-images.dzcdn.net/images/artist/31cc6dde2833e7cadacfe5b29be08cf3/250x250-000000-80-0-0.jpg",
                    picture_big: "https://cdns-images.dzcdn.net/images/artist/31cc6dde2833e7cadacfe5b29be08cf3/500x500-000000-80-0-0.jpg",
                    picture_xl: "https://cdns-images.dzcdn.net/images/artist/31cc6dde2833e7cadacfe5b29be08cf3/1000x1000-000000-80-0-0.jpg",
                    radio: true,
                    tracklist: "https://api.deezer.com/artist/110587/top?limit=50",
                    type: "artist",
                    role: "Featured"
                }
            ],
            md5_image: "d9c957b88855e088940f96e955cf26be",
            artist: {
                id: 5575762,
                name: "Rae Sremmurd",
                link: "https://www.deezer.com/artist/5575762",
                share: "https://www.deezer.com/artist/5575762?utm_source=deezer&utm_content=artist-5575762&utm_term=0_1620597097&utm_medium=web",
                picture: "https://api.deezer.com/artist/5575762/image",
                picture_small: "https://cdns-images.dzcdn.net/images/artist/a79d2c8dfcf5ec86ae5d04f5f582a518/56x56-000000-80-0-0.jpg",
                picture_medium: "https://cdns-images.dzcdn.net/images/artist/a79d2c8dfcf5ec86ae5d04f5f582a518/250x250-000000-80-0-0.jpg",
                picture_big: "https://cdns-images.dzcdn.net/images/artist/a79d2c8dfcf5ec86ae5d04f5f582a518/500x500-000000-80-0-0.jpg",
                picture_xl: "https://cdns-images.dzcdn.net/images/artist/a79d2c8dfcf5ec86ae5d04f5f582a518/1000x1000-000000-80-0-0.jpg",
                radio: true,
                tracklist: "https://api.deezer.com/artist/5575762/top?limit=50",
                type: "artist"
            },
            album: { id: 13789618, title: "SremmLife 2 (Deluxe)", link: "https://www.deezer.com/album/13789618", cover: "https://api.deezer.com/album/13789618/image", cover_small: "https://cdns-images.dzcdn.net/images/cover/d9c957b88855e088940f96e955cf26be/56x56-000000-80-0-0.jpg", cover_medium: "https://cdns-images.dzcdn.net/images/cover/d9c957b88855e088940f96e955cf26be/250x250-000000-80-0-0.jpg", cover_big: "https://cdns-images.dzcdn.net/images/cover/d9c957b88855e088940f96e955cf26be/500x500-000000-80-0-0.jpg", cover_xl: "https://cdns-images.dzcdn.net/images/cover/d9c957b88855e088940f96e955cf26be/1000x1000-000000-80-0-0.jpg", md5_image: "d9c957b88855e088940f96e955cf26be", release_date: "2016-08-12", tracklist: "https://api.deezer.com/album/13789618/tracks", type: "album" },
            type: "track"
        },
        user: {
            present: true,
            username: "Tom",
            useravatar: "/images/420.png",
            premium: true
        },
        search: null
    }

    setNowPlayingState = song => {
        console.log(song)
        // set state nowPlaying given the song currently audible(audible/paused)
    }

    setSearch = data => this.setState({ search: data })
    setQuery = data => this.setState({ query: data })

    getFromSearch = async query => {
        this.setState({ search: null })
        let results
        try {
            results = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query)
            results = await results.json()
        } catch (error) {
            console.error(error)
            return null
        }
        return await results
    }

    getArtistInfoFromID = async id => {
        let results
        try {
            results = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + id)
            results = await results.json()
        } catch (error) {
            console.error(error)
            return null
        }
        return await results
    }

    getAlbumInfoFromID = async id => {
        let results
        try {
            results = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + id)
            results = await results.json()
        } catch (error) {
            console.error(error)
            return null
        }
        return await results
    }

    getTrackInfoFromID = async id => {
        let results
        try {
            results = await fetch("https://striveschool-api.herokuapp.com/api/deezer/track/" + id)
            results = await results.json()
        } catch (error) {
            console.error(error)
            return null
        }
        return await results
    }

    render() {
        return (
            <Router>
                <Route render={routerProps => <NavLeft setQuery={query => this.setQuery(query)} setSearch={data => this.setSearch(data)} search={query => this.getFromSearch(query)} nowPlaying={this.state.nowPlaying} setNowPlaying={id => this.setNowPlaying(id)} user={this.state.user} {...routerProps} />} />
                <Switch>
                    <Route render={routerProps => <Home setup={async query => this.setSearch(await this.getFromSearch(query))} searchResults={this.state.search} nowPlaying={this.state.nowPlaying} setNowPlaying={id => this.setNowPlaying(id)} {...routerProps} />} exact path="/" />
                    <Route render={routerProps => <Artist getData={id => this.getArtistInfoFromID(id)} nowPlaying={this.state.nowPlaying} setNowPlaying={id => this.setNowPlaying(id)} {...routerProps} />} exact path="/artist/:id" />
                    <Route render={routerProps => <Album getData={id => this.getAlbumInfoFromID(id)} nowPlaying={this.state.nowPlaying} setNowPlaying={id => this.setNowPlaying(id)} {...routerProps} />} exact path="/album/:id" />
                    <Route render={routerProps => <Track getData={id => this.getTrackInfoFromID(id)} nowPlaying={this.state.nowPlaying} setNowPlaying={id => this.setNowPlaying(id)} {...routerProps} />} exact path="/track/:id" />
                    <Route render={routerProps => <HTTP501 {...routerProps} />} exact path="/library" />
                    <Route render={routerProps => <HTTP501 {...routerProps} />} exact path="/songs" />
                    <Route render={routerProps => <HTTP501 {...routerProps} />} exact path="/artists" />
                    <Route render={routerProps => <HTTP501 {...routerProps} />} exact path="/albums" />
                    <Route render={routerProps => <PageNotFound {...routerProps} />} />
                </Switch>

                <Route render={routerProps => <MediaControl nowPlaying={this.state.nowPlaying} setNowPlaying={id => this.setNowPlaying(id)} {...routerProps} />} />
            </Router>
        )
    }
}

export default App
