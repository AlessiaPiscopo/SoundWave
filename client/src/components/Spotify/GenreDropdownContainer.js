// Logic for GenreDropdown

import GenreDropdown from "./GenreDropdown";
import Listbox from "./Listbox";
import Detail from "./Detail";
import { Credentials } from "./Credentials";
import axios from "axios";

const GenreDropdownContainer = () => {

  const [genres, setGenres] = useState({
    selectedGenre: "",
    listOfGenresFromAPI: [],
  });

  useEffect(() => {

      // fetch GENRES (i.e. categories)
      axios("https://api.spotify.com/v1/browse/categories", {
        method: "GET",
        headers: { Authorization: `Bearer ${tokenResponse.data.access_token}` },
      }).then((genreResponse) => {
        setGenres({
          selectedGenre: genres.selectedGenre,
          listOfGenresFromAPI: genreResponse.data.categories.items,
        });
      });
    });
    // the useEffect's dependency array will also always need the spotify.ClientId and spotify.ClientSecret
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
        <GenreDropdown
          label="Genre :"
          options={genres.listOfGenresFromAPI}
          selectedValue={genres.selectedGenre}
          changed={genreChanged}
        />
        {/* <GenreDropdown
          label="Playlist :"
          options={playlist.listOfPlaylistFromAPI}
          selectedValue={playlist.selectedPlaylist}
          changed={playlistChanged}
        /> */}
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

export default GenreDropdownContainer;
