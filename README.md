# DELAY - Inspired by Bandcamp

## FUNCTIONALITY 

- [x] land on homepage

## Signup/Login

- [ ] sign up 
  - [ ] sign up as artist 
  - [ ] sign up as fan

- [ ] login as artist/fan

### Search bar
- search for artist, album, or track

## **--- FANS ---**

## Navbar
- [ ] logo link to home/dashboard
- [ ] search bar
- [ ] music feed icon
- [ ] wishlist icon
- [ ] profile avatar

### Music Feed (and artists?)
- [ ] displays new releases and updates from fans and artists the user follows

### Wishlist
- [ ] user can add albums to wishlist 

### Profile
- [ ] info banner band (if !loggedInUser)
  - "This is user's music collection."  
    - <button>Start your own!</button>
      - onClick: fan signup page
- [ ] banner image
- [ ] profile picture
- [ ] username
- [ ] follow button (if !loggedInUser)
- [ ] collection
- [ ] wishlist
- [ ] following

### Dropdown Menu
- [ ] username - link to Profile page
- [ ] purchases 
  - [ ] purchase history
- settings
- help 
- [ ] log out

## Collection 
- [ ] album cards of purchased albums appear here 
- [ ] comment box and favorite track select appears on first album in collection
  - [ ] save button posts comment and favorite track to artist page
  - [ ] cancel button hides box

## Wishlist 
- [ ] displays albums in wishlist
- pre-order, sold-out labels
- appears in *numSold collections*
  - show one comment by a fan
  - avatar grid of fans who have this album in their collection

---

## **--- ARTISTS ---**

## Sign Up
- [ ] [sign up landing page](https://bandcamp.com/artists?from=menubar)
  - [ ] "Bandcamp is an online record store and music community where passionate fans discover, connect with, and directly support the artists they love. <button>Sign up now</button>" 

- [ ] sign up form

  - [ ] 1. general info form

  - [ ] 2. more details form
    - [ ] "Welcome, artistName!"
    - [ ] <select>Genre</select>
      - [ ] <div>Your genre selection determines where your music appears in Bandcamp Discover. It’s OK if you don’t fit perfectly within one of these - just use the genre tag field, below, to provide more granularity.</div>
    - Genre tag(s) - "Optional. Use a comma to separate multiple tags."
    - [ ] location - placeholder: e.g. Montreal, QC
    - [ ] <button>Next</button>

  - [ ] 3. your url form
    - [ ] One last thing. Your address on Bandcamp will be: <input type=text placeholder={artistName}>.bandcamp.com
  - [ ] If you prefer to set this up as a custom domain (e.g., `music.${artistName}.com`), you can do that later, as part of Bandcamp Pro. 
  - [ ] <button>Done</button> // btn 300px

## Navbar 

- [ ] logo
- [ ] dashboard
- [ ] + add 
  - [ ] album
  - [ ] track
  - merch
  - livestream
- stats
  

# Stretch Goals

- [ ] more functionality for fan account
- [ ] more form validation for artist sign-up
- [ ] animations
  - [ ] implement react spring
  - [ ] timed album display gallery thing  
- [ ] terms of use dialog box 
- [ ] light/dark mode
