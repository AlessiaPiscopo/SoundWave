# Project Name
> Outline a brief description of your project.
> Live demo [_here_](https://www.example.com). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents
- [Project Name](#project-name)
  - [Table of Contents](#table-of-contents)
  - [General Information](#general-information)
  - [Technologies Used](#technologies-used)
  - [Features](#features)
  - [Screenshots](#screenshots)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Project Status](#project-status)
  - [Future Features & Additions](#future-features--additions)
  - [Acknowledgements](#acknowledgements)
  - [Contact](#contact)
- [The App](#the-app)
  - [Functionality](#functionality)
  - [Signup/Login](#signuplogin)
  - [--- FANS](#----fans)
  - [Navbar](#navbar)
    - [Search bar](#search-bar)
    - [Music Feed](#music-feed)
    - [Wishlist](#wishlist)
    - [Profile](#profile)
    - [Dropdown Menu](#dropdown-menu)
  - [Collection](#collection)
  - [Wishlist](#wishlist-1)
  - [--- ARTISTS](#----artists)
  - [Sign Up](#sign-up)
<!-- * [License](#license) -->


## General Information
- Provide general information about your project here.
- What problem does it (intend to) solve?
- What is the purpose of your project?
- Why did you undertake it?
<!-- You don't have to answer all the questions - just the ones relevant to your project. -->


## Technologies Used
- Tech 1 - version 1.0
- Tech 2 - version 2.0
- Tech 3 - version 3.0


## Features
List the ready features here:
- Awesome feature 1
- Awesome feature 2
- Awesome feature 3


## Screenshots
![Example screenshot](./img/screenshot.png)
<!-- If you have screenshots you'd like to share, include them here. -->


## Setup
What are the project requirements/dependencies? Where are they listed? A requirements.txt or a Pipfile.lock file perhaps? Where is it located?

Proceed to describe how to install / setup one's local environment / get started with the project.


## Usage
How does one go about using it?
Provide various use cases and code examples here.

`write-your-code-here`


## Project Status
Project is: _in progress_ / _complete_ / _no longer being worked on_. If you are no longer working on it, provide reasons why.


## Future Features & Additions
Include areas you believe need improvement / could be improved. Also add TODOs for future development.

To do:
- more functionality for fan account
- more form validation for artist signup
- react spring
- terms of use dialog box 

Room for improvement:
- Improvement to be done 1
- Improvement to be done 2


## Acknowledgements
Give credit here.
- This project was inspired by...
- This project was based on [this tutorial](https://www.example.com).
- Many thanks to...


## Contact
Created by [@flynerdpl](https://www.flynerd.pl/) - feel free to contact me!


<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->


# The App

## Functionality 

- [x] land on homepage

## Signup/Login

- [ ] sign up 
  - [ ] sign up as artist 
  - [ ] sign up as fan

- [ ] login as artist/fan

## --- FANS

## Navbar

- [ ] logo link to home/dashboard
- [ ] search bar
- [ ] music feed icon
- [ ] wishlist icon
- [ ] profile avatar

### Search bar
- search for artist, album, or track

### Music Feed 
- [ ] displays new releases and updates from fans and artists the user follows

### Wishlist
- [ ] user can add albums to wishlist 

### Profile
- [ ] info band (if !loggedInUser)
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

## --- ARTISTS

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

