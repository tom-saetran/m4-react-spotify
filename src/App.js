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
        nowPlaying: null,
        loggedInUser: null
    }

    setNowPlaying = id => {
        console.log(id)
    }

    render() {
        return (
            <Router>
                <NavLeft target={this.state.loggedInUser} />
                <Switch>
                    <Route render={routerProps => <Home setNowPlaying={id => this.setNowPlaying(id)} {...routerProps} />} exact path="/" />
                    <Route render={routerProps => <Artist setNowPlaying={id => this.setNowPlaying(id)} {...routerProps} />} exact path="/artist/:id" />
                    <Route render={routerProps => <Album setNowPlaying={id => this.setNowPlaying(id)} {...routerProps} />} exact path="/album/:id" />
                    <Route render={routerProps => <PageNotFound {...routerProps} />} />
                </Switch>
                <MediaControl setNowPlaying={id => this.setNowPlaying(id)} target={this.state.nowPlaying} />
            </Router>
        )
    }
}

export default App
