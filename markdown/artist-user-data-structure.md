# Artist User Data Structure

# Learn how to structure data in Firestore: 
- https://www.youtube.com/watch?v=lW7DWV2jST0&ab_channel=Firebase

# Header <header>

- ## Banner <img>

- ## Artist Profile Nav Bar
  
  <nav className="navbar">

  - link text: 
    font-size: 14px;
    font-weight: 700;
    line-height: 36px;
  - active: 
    - border-top: 2px solid #363636

  - music <NavLink className="music-link" />
    - **ArtistMusic.js**
      - discography
        - if (albumCount < 3) { albumCover: 368px }
        - else { albumCover: 168px }

  - merch <NavLink className="merch-link" />
    - **ArtistMerch.js**
      - posters 
  
  - shows <NavLink className="shows-link" />
    - **ArtistShows.js**

# Artist Bio Sidebar
  
  - **ArtistBioSidebar.js**
  
    <div className="artist-bio-sidebar">
    .artist-bio-sidebar {
      width: 120px;
    }

- ## Profile Picture
    - <img className="sidebar-profile-picture" src="" alt="">
    .sidebar-profile-picture {
      <!-- image keeps its aspect ratio, but is resized to fit within the given dimension container -->
      object-fit: contain; 
    }

- ## Artist Name, Location, Follow/Unfollow Button
    - <span className="title">artistName</span> (bold text)
    - <span className="secondary-text">location</span>
    - <button className="follow unfollow following"></button>

- ## Official Website and Socials Links (# links, form to add links - stretch)
  - <a href="">officialWebsiteLink</a>
  - <a href="">facebookLink</a>
  - <a href="">twitterLink</a>
  - <a href="">youtubeLink</a>
  - <a href="">instagramLink</a>
  
- ## Tour Dates (dummy data; (TourDatesForm - stretch)
  <div className=concertsList>
    <span className="title">shows</span>
    <div>
      <span>concertDate</span>
      <span>concertVenue</span>
      <span>concertLocation</span>
    </div>
  </div>

- ## Discography 
  - map through artistAlbums
  - return: 
    - albumCover (small)
    - albumName
    - artistName

# Album Details 

- **LEFT COLUMN**

- ## Album and Artist Name 
  
  - albumTitle
  - by artist (loggedInArtist?)
  
- ## Audio Player 

<!-- - ## Album Format, Buy Link, Price, Send As Gift -->
  
- ## Track List 
  
  - play button small
  - trackNum
  - trackTitle
  - trackLength (time)
  
- ## Album Description <p>

- ## Release date

- **RIGHT COLUMN**

- albumCover (large)
<!-- - share/embed -->
- add to wishlist/in wishlist
  
- supported by 
  - comment
    - fanAvatar
    - fanUserName
    - fanAlbumComment
      - favorite track: fanFavoriteTrack
  - <span>more...</span> (# link to more comments)
  - fan avatar grid
    - <span>more...</span> (# link to more fans)