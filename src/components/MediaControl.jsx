import React from "react"

class MediaControl extends React.Component {
    render() {
        return (
            <div className="player container-fluid fixed-bottom bg-container pt-1">
                <div className="row flex-nowrap justify-content-between playBar py-3">
                    <div className="col-3">
                        <div className="playerArtistInfo d-flex">
                            <img alt="" />
                            <div className="d-flex flex-column pl-2">
                                <h6>...</h6>
                                <p>...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="playerControls w-50 d-flex justify-content-between">
                            <a href="/">
                                <img src="images/shuffle.png" alt="shuffle" />
                            </a>
                            <a href="/">
                                <img src="images/previous.png" alt="previous" />
                            </a>
                            <a id="playBtn" href="/" onClick={handlePlay}>
                                <img src="images/play.png" alt="play" />
                            </a>
                            <a href="/">
                                <img src="images/next.png" alt="next" />
                            </a>
                            <a href="/">
                                <img src="images/repeat.png" alt="repeat" />
                            </a>
                        </div>
                        <div className="progressContainer d-flex align-items-center">
                            <span className="currentTime">00:00</span>
                            <div className="progress w-100">
                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <audio></audio>
                                </div>
                            </div>
                            <span className="duration">00:00</span>
                        </div>
                    </div>
                    <div className="col-auto mr-3">
                        <div className="playerVolume">
                            <i className="fa fa-volume-up" onClick={handleChangeVolume}></i>
                            <input type="range" value="50" onChange="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MediaControl

// ### Player functionality ###
const audio = document.createElement("audio") // grabbing audio element
let playIcon = document.querySelector("img[alt='play']")
let prevVolume = 0.5

const setPlayerSong = song => {
    // setting song data for the player
    audio.src = song.preview // uses the preview .mp3 url to be used as audio source
    playIcon.src = "./playerbuttons/Pause.png"
    setPlayerInfos(song) // changes player information for every new card that we click
    window.localStorage.setItem("songId", song.id) // stores the songId in the storage to retrieve it in the search() fetch
    audio.play() // plays the song via the preview link
}

const setPlayerInfos = song => {
    const playerArtistInfo = document.querySelector(".playerArtistInfo") // selects the player element that has the song info
    const img = playerArtistInfo.querySelector("img") // starting from playerArtistInfo we select it's image child
    const songTitle = playerArtistInfo.querySelector("h6")
    const songAlbum = playerArtistInfo.querySelector("p")

    img.src = song.album.cover_small // sets the source for the album image to be displayed
    img.classList.add("img-fluid") // prevents the image to be bigger than the space available
    songTitle.innerText = song.title // assigns the song title as innerText of the h6 element
    songAlbum.innerText = song.album.title

    const currTime = document.querySelector(".player .currentTime") //this block updates the timer text of the song
    const duration = document.querySelector(".player .duration")
    currTime.innerText = "00:00"
    duration.innerText = ("0" + Math.floor(song.duration / 60)).substr(-2) + ":" + ("0" + Math.floor(song.duration % 60)).substr(-2)

    audio.src = song.preview // preloads the .mp3 url to be played when clicking on the play button and not a card this time
}

const handlePlay = () => {
    if (audio.played.length > 0) {
        if (audio.paused) {
            playIcon.src = "/images/pause.png"
            audio.play()

            console.log(1)
        } else {
            playIcon.src = "/images/play.png"
            audio.pause()
            console.log(2)
        }
    } else {
        playIcon.src = "/images/pause.png"
        audio.play()
        console.log(3)
    }
}

const changeProgressBar = (node, perc) => {
    node.style.width = perc.toString() + "%" // makes the bar grow from 0 to 100%
    node.setAttribute("aria-valuenow", parseInt(perc.toString())) // assigns the percentage of the progress for screen readers
}

const handleProgressBarUpdate = (ended = false) => {
    const progressBar = document.querySelector(".progress-bar")
    const percentage = (audio.currentTime / audio.duration) * 100 // converting the time in percentages for the progress bar

    changeProgressBar(progressBar, percentage)

    if (ended) {
        changeProgressBar(progressBar, 0)
        playIcon.src = "./playerbuttons/Play.png"
    }

    const currTime = document.querySelector(".player .currentTime") //this block updates the timer text of the song
    const minutes = "0" + Math.floor(audio.currentTime / 60)
    const seconds = "0" + Math.floor(audio.currentTime)
    currTime.innerText = minutes.substr(-2) + ":" + seconds.substr(-2)
}

const handleProgressBarClick = event => {
    // fired after clicking the progress-bar

    const elem = event.currentTarget.firstElementChild
    const percentage = parseInt(
        (event.offsetX / event.currentTarget.clientWidth) * 100 // calculates where you clicked in relation to the total width of the div (clientWidth)
    )

    elem.style.width = percentage.toString() + "%" // updates the bar with the new position
    elem.setAttribute("aria-valuenow", percentage.toString())

    audio.currentTime = (percentage / 100) * audio.duration // moves song time depending on where the progress-bar was clicked
}

audio.ontimeupdate = () => handleProgressBarUpdate() // we are going to trigger a change in the progress bar
// when the event ontimeupdate fires, so very often indeed.

audio.onended = () => handleProgressBarUpdate(true) // triggered when the song ends, passing true as a parameter to reset the progress bar at the end

const handleChangeVolume = event => {
    const volume = event.target.value / 100 // gets the volume in a range from 0 to 1 which is what the range expects
    prevVolume = volume // updates the default volume value
    localStorage.setItem("prevVolume", volume) // sets the prevVolume to the localStorage to be retrieved after the refresh
    audio.volume = volume // affects the real audio volume with the new volume value
}

window.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.querySelector(".progress") // grabs the .progress container
    progressBar.addEventListener("click", handleProgressBarClick) // attaches an onclick event on the progress bar to fire handleProgressBarClick upon clicking

    const volumeRange = document.querySelector(".playerVolume input[type='range']") // grabs the volume input range
    volumeRange.addEventListener("change", handleChangeVolume) // attaches an onchange event to fire the handleChangeVolume when the input changes value

    let storageVolume = localStorage.getItem("prevVolume") // retrieves volume value from localStorage
    if (storageVolume) {
        // if a storageValue exists we set it as the audio volume
        prevVolume = storageVolume
        audio.volume = storageVolume
        volumeRange.setAttribute("value", storageVolume * 100) // moves the input range to the correct position
    }
})

const history = localStorage.getItem("query") // attempts grabbing value from the localStorage, will be undefined if not present

let query = history ? history : "daft punk" // if history has a value will be evaluated as truthy and uses the string, otherwise it falls back to "daft punk"

const handleSearchQuery = e => {
    query = e.target.value // sets new default value for query
    localStorage.setItem("query", e.target.value) // adds the same value in the storage for persistance after refreshes
}

const albumCard = songInfo => {
    // template for a single album card with dynamic data passed from the forEach in search()
    return `<img
                class="img-fluid"
                src=${songInfo.album.cover_medium}
                alt="img placeholder"
              />
              <p>
                <a href="/album_page.html?albumId=${songInfo.album.id}">${songInfo.album.title}</a>
                <br />
                <a href="/artist_page.html?artistId=${songInfo.artist.id}">${songInfo.artist.name}</a>
              </p>`
}

const search = (q = query, firstLoad = false) => {
    fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + q

        // OLD ENDPOINT EXAMPLE TO SEE HEADERS USAGE (NOT CURRENTLY WORKING)
        // ,{
        //   method: "GET",
        //   headers: {
        //     "x-rapidapi-key":
        //       "44990dcd76msh9e7711544b7bcbbp18140cjsnaed06a042dae",
        //     "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        //   },
        // }
    )
        .then(response => {
            return response.json()
        })
        .then(parsedBody => {
            // parsedBody has the actual data from the fetch's body
            // console.log(parsedBody);

            const songsInfo = parsedBody.data // need to access the data property to get the array of elements
            const row = document.querySelector("#results > .row") // grabs the container where we put all the newly generated columns

            row.innerHTML = "" // makes sure the container is empty before adding new data (eg. after the search)

            songsInfo.forEach(song => {
                const spinner = document.querySelector(".spinner-border") // grabs the spinner element
                if (spinner) {
                    // check if it exists in the page
                    spinner.parentNode.remove() // then removes it
                }

                const col = document.createElement("div") // creates a new div that will be our new column for the card
                col.className = "col text-center" // adds the actual col class to make it a column
                col.id = song.id
                col.innerHTML = albumCard(song) // this is when we fill the col with some content in its innerHTML
                // via a function albumCard in which we pass the song object

                col.onclick = () => setPlayerSong(song) // FUNCTION CALL IN EVENT HANDLERS MUST BE WRAPPED IN AN ANONIMOUS FUNCTION TO NOT EXECUTE RIGHT AWAY BUT WAIT THE EVENT TO CALL THEM

                row.appendChild(col) // finally adding the new col (and every new col generated by the forEach) in the row element
            })

            if (firstLoad) {
                const storageSongId = window.localStorage.getItem("songId")
                const prevSong = songsInfo.find(song => song.id === parseInt(storageSongId))
                if (storageSongId && prevSong) {
                    if (prevSong) {
                        setPlayerInfos(prevSong)
                    }
                } else {
                    setPlayerInfos(songsInfo[0])
                }
            }
        })
        .catch(err => {
            console.error(err) // in case of something going wrong the error will be catched here and logged
        })
}

window.onload = () => {
    search(undefined, true) // executes the fetch on page loading (we pass undefined to use the default query parameter, true for firstLoad value)

    const inputField = document.getElementById("searchField") // grabs searchField reference
    inputField.addEventListener("change", handleSearchQuery) // attaches an event listener of type "change" and
}
