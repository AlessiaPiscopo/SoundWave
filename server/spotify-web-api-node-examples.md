# spotify-web-api-node Docs Notes

- Docs: https://www.npmjs.com/package/spotify-web-api-node#usage

// Some test artist Ids:
//  - Alvvays: 3kzwYV3OCB010YfXMF0Avt
//  - TOPS: 2SdK1QDmZIP2hk94rSaLl9

## Get album
spotifyApi.getAlbum('5U4W9E5WsYb2jUQWePT8Xm')
  .then(function(data) {
    console.log('Album information', data.body);
  }, function(err) {
    console.error(err);
  });

## Get multiple albums
spotifyApi.getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV'])
  .then(function(data) {
    console.log('Albums information', data.body);
  }, function(err) {
    console.error(err);
  });

## Get an artist
spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
  .then(function(data) {
    console.log('Artist information', data.body);
  }, function(err) {
    console.error(err);
  });

## Get multiple artists
spotifyApi.getArtists(['2hazSY4Ef3aB9ATXW7F5w3', '6J6yx1t3nwIDyPXk5xa7O8'])
  .then(function(data) {
    console.log('Artists information', data.body);
  }, function(err) {
    console.error(err);
  });

## Get albums by a certain artist
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
  .then(function(data) {
    console.log('Artist albums', data.body);
  }, function(err) {
    console.error(err);
  });

## Get tracks in an album
spotifyApi.getAlbumTracks('41MnTivkwTO3UUJ8DrqEJJ', { limit : 5, offset : 1 })
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });


## Get artists related to an artist
spotifyApi.getArtistRelatedArtists('0qeei9KQnptjwb8MgkqEoy')
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    done(err);
  });

## Retrieve new releases
spotifyApi.getNewReleases({ limit : 5, offset: 0, country: 'SE' })
  .then(function(data) {
    console.log(data.body);
      done();
    }, function(err) {
       console.log("Something went wrong!", err);
    });
  });

## Get a List of Categories
spotifyApi.getCategories({
      limit : 5,
      offset: 0,
      country: 'SE',
      locale: 'sv_SE'
  })
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    console.log("Something went wrong!", err);
  });

## Get a Category (in Sweden)
spotifyApi.getCategory('party', {
      country: 'SE',
      locale: 'sv_SE'
  })
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    console.log("Something went wrong!", err);
  });