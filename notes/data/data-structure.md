# Data Structure

# header <header>

- ## banner <img>

- ## Artist Profile Nav Bar
  
  <nav className="artist-profile-nav-bar">

  - link text: 
    font-size: 14px;
    font-weight: 700;
    line-height: 36px;
  - active: 
    - border-top: 2px solid #363636

  - music <NavLink className="" />
    - **ArtistMusic.js**
      - discography
        - if (albumCount < 3) { albumCover: 368px }
        - else { albumCover: 168px }

  - merch <NavLink className="" />
    - **ArtistMerch.js**
      - posters 
  
  - shows <NavLink className="" />
    - **ArtistShows.js**
  
  - <span>community</span>

- ## Artist Bio Sidebar
  
  - **ArtistBioSidebar.js**
  
    <div className="artist-bio-sidebar">
    .artist-bio-sidebar {
      width: 120px;
    }

- ### Profile Picture
    - <img className="sidebar-profile-picture" src="" alt="">
    .sidebar-profile-picture {
      <!-- image keeps its aspect ratio, but is resized to fit within the given dimension container -->
      object-fit: contain; 
    }
      - width: 
    - <span className="title">artistName</span>
    - <span className="secondary-text">location</span>
    - <button className="follow unfollow following">
    - 