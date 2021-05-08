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

class App extends React.Component {
    state = {
        nowPlaying: {
            artist: "Demo Artist",
            album: "Demo Album",
            albumUrl: "/images/420.png",
            song: "Demo Song Title"
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

    setSearch = data => {
        this.setState({ search: data })
    }

    getFromSearch = async query => {
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

    render() {
        return (
            <Router>
                <Route render={routerProps => <NavLeft setSearch={data => this.setSearch(data)} search={query => this.getFromSearch(query)} nowPlaying={this.state.nowPlaying} setNowPlaying={id => this.setNowPlaying(id)} user={this.state.user} {...routerProps} />} />
                <Switch>
                    <Route render={routerProps => <Home searchResults={this.state.search} nowPlaying={this.state.nowPlaying} setNowPlaying={id => this.setNowPlaying(id)} {...routerProps} />} exact path="/" />
                    <Route render={routerProps => <Artist getData={id => this.getArtistInfoFromID(id)} nowPlaying={this.state.nowPlaying} setNowPlaying={id => this.setNowPlaying(id)} {...routerProps} />} exact path="/artist/:id" />
                    <Route render={routerProps => <Album getData={id => this.getAlbumInfoFromID(id)} nowPlaying={this.state.nowPlaying} setNowPlaying={id => this.setNowPlaying(id)} {...routerProps} />} exact path="/album/:id" />
                    <Route render={routerProps => <PageNotFound {...routerProps} />} />
                </Switch>

                <Route render={routerProps => <MediaControl nowPlaying={this.state.nowPlaying} setNowPlaying={id => this.setNowPlaying(id)} {...routerProps} />} />
            </Router>
        )
    }
}

export default App
