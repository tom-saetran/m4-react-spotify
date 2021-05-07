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
    render() {
        return (
            <Router>
                <NavLeft />
                <Switch>
                    <Route component={Home} exact path="/" />
                    <Route component={Artist} exact path="/artist/:id" />
                    <Route component={Album} exact path="/album/:id" />
                    <Route component={PageNotFound} />
                </Switch>
                <MediaControl />
            </Router>
        )
    }
}

export default App
