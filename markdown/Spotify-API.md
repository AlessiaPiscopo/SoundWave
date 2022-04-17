# Spotify API

- search for artist 
  - get /v1/artists



## STEPS

- move to backend 
    - helper function/handler for auth token fetch
      - call this from each handler where its needed
- convert to async 
- spotifyRoutes
- fetch data from fe
  - store in state 
  - artist, setArtist 

## Endpoints 

- some artist IDs: 
  - Alvvays: 3kzwYV3OCB010YfXMF0Avt
  - TOPS: 2SdK1QDmZIP2hk94rSaLl9

### GET Artist - /v1/artists/{id}

{
  "external_urls": {
    "spotify": "https://open.spotify.com/artist/3kzwYV3OCB010YfXMF0Avt"
  },
  "followers": {
    "href": null,
    "total": 389375
  },
  "genres": [
    "dream pop",
    "dreamo",
    "indie pop",
    "indie rock",
    "shoegaze",
    "toronto indie"
  ],
  "href": "https://api.spotify.com/v1/artists/3kzwYV3OCB010YfXMF0Avt",
  "id": "3kzwYV3OCB010YfXMF0Avt",

  "images": [
    {
      "height": 640,
      "url": "https://i.scdn.co/image/ab6761610000e5eb1ae1adb2ea199888f0c8c741",
      "width": 640
    },
    {
      "height": 320,
      "url": "https://i.scdn.co/image/ab676161000051741ae1adb2ea199888f0c8c741",
      "width": 320
    },
    {
      "height": 160,
      "url": "https://i.scdn.co/image/ab6761610000f1781ae1adb2ea199888f0c8c741",
      "width": 160
    }
  ],

  "name": "Alvvays",
  "popularity": 60,
  "type": "artist",
  "uri": "spotify:artist:3kzwYV3OCB010YfXMF0Avt"
}

### GET Artists - /v1/artists?ids=id1,id2,...