import React, { useState, useEffect } from "react";
import Dropdown from "./components/Dropdown";
import Listbox from "./components/Listbox";
import Detail from "./components/Detail";
import { Credentials } from "./components/Credentials";
import axios from "axios";

const App = () => {
  const spotify = Credentials();

  console.log("RENDERING APP.JS");

  const data = [
    { value: 1, name: "A" },
    { value: 2, name: "B" },
    { value: 3, name: "C" },
  ];

  const [token, setToken] = useState("");
  const [genres, setGenres] = useState({
    selectedGenre: "",
    listOfGenresFromAPI: [],
  });
  const [playlist, setPlaylist] = useState({
    selectedPlaylist: "",
    listOfPlaylistFromAPI: [],
  });
  const [tracks, setTracks] = useState({
    selectedTrack: "",
    listOfTracksFromAPI: [],
  });
  const [trackDetail, setTrackDetail] = useState(null);

  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      setToken(tokenResponse.data.access_token);

      axios("https://api.spotify.com/v1/browse/categories", {
        method: "GET",
        headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
      }).then((genreResponse) => {
        setGenres({
          selectedGenre: genres.selectedGenre,
          listOfGenresFromAPI: genreResponse.data.categories.items,
        });
      });
    });
  }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]);

  const genreChanged = (val) => {
    setGenres({
      selectedGenre: val,
      listOfGenresFromAPI: genres.listOfGenresFromAPI,
    });

    axios(
      `https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    ).then((playlistResponse) => {
      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylistFromAPI: playlistResponse.data.playlists.items,
      });
    });

    console.log(val);
  };

  const playlistChanged = (val) => {
    console.log(val);
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI,
    });
  };

  const buttonClicked = (e) => {
    e.preventDefault();

    axios(
      `https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    ).then((tracksResponse) => {
      setTracks({
        selectedTrack: tracks.selectedTrack,
        listOfTracksFromAPI: tracksResponse.data.items,
      });
    });
  };

  const listboxClicked = (val) => {
    const currentTracks = [...tracks.listOfTracksFromAPI];

    const trackInfo = currentTracks.filter((t) => t.track.id === val);

    setTrackDetail(trackInfo[0].track);
  };

  return (
    <div className="container">
      <form onSubmit={buttonClicked}>
        <Dropdown
          label="Genre :"
          options={genres.listOfGenresFromAPI}
          selectedValue={genres.selectedGenre}
          changed={genreChanged}
        />
        <Dropdown
          label="Playlist :"
          options={playlist.listOfPlaylistFromAPI}
          selectedValue={playlist.selectedPlaylist}
          changed={playlistChanged}
        />
        <div className="col-sm-6 row form-group px-0">
          <button type="submit" className="btn btn-success col-sm-12">
            Search
          </button>
        </div>
        <div className="row">
          <Listbox
            items={tracks.listOfTracksFromAPI}
            clicked={listboxClicked}
          />
          {trackDetail && <Detail {...trackDetail} />}
        </div>
      </form>
    </div>
  );
};

export default App;

// APP COPY ------------------------------

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import GlobalStyles from "./GlobalStyles";
// import Homepage from "./pages/Homepage";
// // import Dashboard from "./pages/Dashboard";
// import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";
// import Profile from "./pages/Profile";
// import Artist from "./pages/Artist";
// import FanNavBar from "./components/NavBar/FanNavBar";
// import ArtistDashboard from "./pages/ArtistDashboard";

// import Dropdown from "./components/Dropdown";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Credentials } from "./components/Credentials";

// const App = () => {
//   const spotify = Credentials();

//   console.log("rendering App.js!!");

//   const data = [
//     { name: "A", value: 1 },
//     { name: "B", value: 2 },
//     { name: "C", value: 3 },
//   ];

//   const [token, setToken] = useState("");
//   const [genres, setGenres] = useState({
//     selectedGenre: "",
//     listOfGenresFromAPI: [],
//   });

//   useEffect(() => {
//     axios("https://accounts.spotify.com/api/token", {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         Authorization:
//           "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
//       },
//       data: "grant_type=client_credentials",
//       method: "POST",
//     }).then((tokenResponse) => {
//       setToken(tokenResponse.data.access_token);

//       axios("https://api.spotify.com/v1/browse/categories?locale=sv_US", {
//         method: "GET",
//         headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
//       }).then((genreResponse) => {
//         setGenres({
//           selectedGenre: genres.selectedGenre,
//           listOfGenresFromAPI: genreResponse.data.categories.items,
//         });
//       });
//     });
//   }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]);

//   return (
//     <>
//       <BrowserRouter>
//         <GlobalStyles />
//         <FanNavBar />

//         {/* -------------------- */}

//         <div className="container">
//           <form onSubmit={() => {}}>
//             <Dropdown options={genres} />
//             <Dropdown options={data} />
//             <button type="submit">Search</button>
//           </form>
//         </div>

//         {/* -------------------- */}

//         <Routes>
//           <Route exact path="/" element={<Homepage />} />
//           {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}

//           <Route exact path="/signup" element={<SignUp />} />
//           <Route exact path="/login" element={<Login />} />

//           <Route exact path="/profile" element={<Profile />} />

//           <Route exact path="/artist" element={<Artist />} />
//           <Route exact path="/artist-dashboard" element={<ArtistDashboard />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;
