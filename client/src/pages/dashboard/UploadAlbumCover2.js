import { useState, useEffect } from "react";
import { storage } from "../../firebase/firebase-config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const UploadAlbumCover2 = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");

  const uploadImage = () => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) =>
        setImageList((prev) => [...prev, url])
      );
    });
  };

  // FETCH IMAGES --------------------------------------------------------

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      console.log(response);

      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div>
      <input
        type="file"
        onChange={(event) => setImageUpload(event.target.files[0])}
      />
      <button onClick={uploadImage}>Upload Image</button>

      {imageList.map((url) => {
        return <img src={url} />;
      })}
    </div>
  );
};

export default UploadAlbumCover2;

// Copy with notes:

// **THIS DEMO IS WITH IMAGES, BUT THE SAME APPLIES FOR ANY TYPE OF FILE**

// import "./App.css";
// import { useState, useEffect } from "react";
// import { storage } from "./firebase";
// import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
// import { v4 } from "uuid";

// function App() {
//   // Access the file that the user inputs and store it in a state variable
//   const [imageUpload, setImageUpload] = useState(null);
//   const [imageList, setImageList] = useState([]);

//   // create a variable to store the path to the folder that contains the images we want to list
//   const imageListRef = ref(storage, "images/");

//   // const getInputImage = () => {
//   //   // since files is an array, we pass it index 0 to access the first item
//   //   // grab the uploaded image and store in imageUpload
//   //   setImageUpload((event) => event.target.files[0]);
//   // };

//   const uploadImage = () => {
//     // if the user didn't upload a file, the uploadImage function never fires
//     if (imageUpload == null) return;

//     // ref() is a function from Firebase that lets us:
//     //  - select the desired folder to store our image and
//     //  - create a name (i.e. unique id) for the file we want to store
//     //    - so, we keep the user's file name (imageUpload.name) and tack on a uuid
//     //    - v4 is the function from the uuid library that will generate a unique string of characters
//     const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

//     // next, we can upload the image to Firebase, using the uploadBytes function!
//     // uploadBytes takes in two arguments:
//     //  - the reference to where we want to upload the image
//     //  - the image that you want to upload
//     // and returns a promise
//     // so we tack on .then to grab the response and display a message confirming that the image was uploaded
//     uploadBytes(imageRef, imageUpload).then((snapshot) => {
//       // alert("Image Uploaded!");
//       // we need a check for when the user uploads a new image
//       // we use "snapshot" from the uploadBytes function to get the URL of the image that was just uploaded
//       getDownloadURL(snapshot.ref).then((url) =>
//         // grab the prev list, set it to a new array with the prev one + the url
//         setImageList((prev) => [...prev, url])
//       );
//     });

//     // and just like that, the user can now upload an image
//   };

//   // FETCH IMAGES --------------------------------------------------------

//   // create a useEffect to fetch the images from Firebase and display them on our page
//   // we first need a state to keep track of the URL of each image in our storage
//   // the URLs will be stored in imageList, which starts off as an empty array
//   useEffect(() => {
//     // listAll is a function from Firebase that... lists all the images from a given path
//     // we pass it the desired path as an argument
//     listAll(imageListRef).then((response) => {
//       console.log(response);
//       // returns an object with each item holding the data for each image!
//       // the URL, however, is not included in this object--React (and HTML, so JSX) need the URL as the source (src) to display an image
//       // Firebase has a function getDownloadURL to which we pass the reference to a specific image, and it returns the specific URL
//       // using getDownloadURL, we to loop through each item in the array to retrieve the URL that we need to display the data
//       // now, to add another item to a state that is an array, we take the current value of the list, set it equal to the same list, then add the URL at the end
//       response.items.forEach((item) => {
//         getDownloadURL(item).then((url) => {
//           // grab the prev list, set it to a new array with the prev one + the url
//           setImageList((prev) => [...prev, url]);
//         });
//       });
//     });
//   }, []);

//   return (
//     <div className="App">
//       <input
//         type="file"
//         onChange={(event) => setImageUpload(event.target.files[0])}
//       />
//       <button onClick={uploadImage}>Upload Image</button>
//       {/* map through each image stored in Firebase to get their URL  */}
//       {imageList.map((url) => {
//         return <img src={url} />;
//       })}
//     </div>
//   );
// }

// export default App;
