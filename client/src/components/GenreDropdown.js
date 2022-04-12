// import { useState, useEffect } from "react";
// import axios from "axios";
// // import Dropdown from "./components/Dropdown";
// import { Credentials } from "./Credentials";

// const GenreDropdown = (props) => {
//   const spotify = Credentials();
//   // eslint-disable-next-line
//   const [token, setToken] = useState("");
//   const [genres, setGenres] = useState({
//     selectedGenre: "",
//     listOfGenresFromAPI: [],
//   });

//   useEffect(() => {
//     // fetch AUTHORIZATION TOKEN--put this in a custom hook, useAuth, since we need to call this endpoint before calling any other endpoint!
//     axios("https://accounts.spotify.com/api/token", {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         Authorization: `Basic ${btoa(
//           spotify.ClientId + ":" + spotify.ClientSecret
//         )}`,
//         // used interpolation instead of: "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
//       },
//       data: "grant_type=client_credentials",
//       method: "POST",
//     }).then((tokenResponse) => {
//       setToken(tokenResponse.data.access_token);

//       // fetch GENRES (i.e. categories)
//       axios("https://api.spotify.com/v1/browse/categories", {
//         method: "GET",
//         headers: { Authorization: `Bearer ${tokenResponse.data.access_token}` },
//       }).then((genreResponse) => {
//         setGenres({
//           selectedGenre: genres.selectedGenre,
//           listOfGenresFromAPI: genreResponse.data.categories.items,
//         });
//       });
//     });
//     // the useEffect's dependency array will also always need the spotify.ClientId and spotify.ClientSecret
//   }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]);

//   //   return (
//   //     <>
//   //       {/* GENRE DROPDOWN */}
//   //       <div>
//   //         <select
//   //           label="Genre :"
//   //           options={genres.listOfGenresFromAPI}
//   //           selectedValue={genres.selectedGenre}
//   //         />
//   //         <button type="submit">Search</button>
//   //       </div>
//   //     </>
//   //   );

//   return (
//     <div>
//       <label>{props.label}</label>

//       <select
//         value={props.selectedValue}
//         onChange={props.selectedValue}
//         // convert to search bar/see SlingAir flights dropdown for placeholder
//         // placeholder="Select a genre"
//       >
//         <option key={0}>Select...</option>
//         {props.options.map((item, idx) => (
//           <option key={idx + 1} value={item.id}>
//             {item.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default GenreDropdown;

import React from "react";

const GenreDropdown = (props) => {
  const dropdownChanged = (e) => {
    props.changed(e.target.value);
  };

  return (
    <div className="col-sm-6 form-group row px-0">
      <label className="form-label col-sm-2">{props.label}</label>
      <select
        value={props.selectedValue}
        onChange={dropdownChanged}
        className="form-control form-control-sm col-sm-10"
      >
        <option key={0}>Select...</option>
        {props.options.map((item, idx) => (
          <option key={idx + 1} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreDropdown;
