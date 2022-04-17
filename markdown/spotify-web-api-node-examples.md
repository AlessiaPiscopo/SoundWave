# spotify-web-api-node Docs Notes

- Docs: https://www.npmjs.com/package/spotify-web-api-node#usage

---

## Helper Functions Overview

### Fetch music metadata
- Albums, artists, and tracks
- Audio features and analysis for tracks
- Albums for a specific artist
- Top tracks for a specific artist
- Artists similar to a specific artist

### Search
- Albums, artists, tracks, and playlists

### Browse 
- Get New Releases
- Get Featured Playlists
- Get a List of Categories
- Get a Category
- Get a Category's Playlists
- Get recommendations based on seeds
- Get available genre seeds

### Shows ??? - stretch
- https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-show

## Examples 

// Get album
spotifyApi.getAlbum('5U4W9E5WsYb2jUQWePT8Xm')
  .then(function(data) {
    console.log('Album information', data.body);
  }, function(err) {
    console.error(err);
  });

// Get multiple albums
spotifyApi.getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV'])
  .then(function(data) {
    console.log('Albums information', data.body);
  }, function(err) {
    console.error(err);
  });

// Get an artist
spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
  .then(function(data) {
    console.log('Artist information', data.body);
  }, function(err) {
    console.error(err);
  });

// Get multiple artists
spotifyApi.getArtists(['2hazSY4Ef3aB9ATXW7F5w3', '6J6yx1t3nwIDyPXk5xa7O8'])
  .then(function(data) {
    console.log('Artists information', data.body);
  }, function(err) {
    console.error(err);
  });

// Get albums by a certain artist
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
  .then(function(data) {
    console.log('Artist albums', data.body);
  }, function(err) {
    console.error(err);
  });

// Search tracks whose name, album or artist contains 'Love'
spotifyApi.searchTracks('Love')
  .then(function(data) {
    console.log('Search by "Love"', data.body);
  }, function(err) {
    console.error(err);
  });

// Search artists whose name contains 'Love'
spotifyApi.searchArtists('Love')
  .then(function(data) {
    console.log('Search artists by "Love"', data.body);
  }, function(err) {
    console.error(err);
  });

// Search tracks whose artist's name contains 'Love'
spotifyApi.searchTracks('artist:Love')
  .then(function(data) {
    console.log('Search tracks by "Love" in the artist name', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Search tracks whose artist's name contains 'Kendrick Lamar', and track name contains 'Alright'
spotifyApi.searchTracks('track:Alright artist:Kendrick Lamar')
  .then(function(data) {
    console.log('Search tracks by "Alright" in the track name and "Kendrick Lamar" in the artist name', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });


// Search playlists whose name or description contains 'workout'
spotifyApi.searchPlaylists('workout')
  .then(function(data) {
    console.log('Found playlists are', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Get tracks in an album
spotifyApi.getAlbumTracks('41MnTivkwTO3UUJ8DrqEJJ', { limit : 5, offset : 1 })
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Get an artist's top tracks
spotifyApi.getArtistTopTracks('0oSGxfWSnnOXhD2fKuz2Gy', 'GB')
  .then(function(data) {
    console.log(data.body);
    }, function(err) {
    console.log('Something went wrong!', err);
  });

// Get artists related to an artist
spotifyApi.getArtistRelatedArtists('0qeei9KQnptjwb8MgkqEoy')
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    done(err);
  });

/* Get Audio Features for a Track */
spotifyApi.getAudioFeaturesForTrack('3Qm86XLflmIXVm1wcwkgDK')
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    done(err);
  });

/* Get Audio Analysis for a Track */
spotifyApi.getAudioAnalysisForTrack('3Qm86XLflmIXVm1wcwkgDK')
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    done(err);
  });

/* Get Audio Features for several tracks */
spotifyApi.getAudioFeaturesForTracks(['4iV5W9uYEdYUVa79Axb7Rh', '3Qm86XLflmIXVm1wcwkgDK'])
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    done(err);
  });
