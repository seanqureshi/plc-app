// import React, { Component } from 'react'
// import Dropzone from 'react-dropzone';
// import axios from 'axios';


// export default class AddImage extends Component {
//     constructor() {
//         super();

//         this.state = {
//             image: []
//         }
//     }

//     handleDrop = files => {
//         // Push all the axios request promise into a single array
//         const uploaders = files.map(file => {
//             // Initial FormData
//             const formData = new FormData();
//             formData.append("file", file);
//             formData.append("tags", `codeinfuse, medium, gist`);
//             formData.append("upload_preset", "yqygvg0o"); // Replace the preset name with your own
//             formData.append("api_key", "571626964235977"); // Replace API key with your own Cloudinary key
//             formData.append("timestamp", (Date.now() / 1000) | 0);

//             // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
//             return axios.post("http://res.cloudinary.com/dnlh9tabd", formData, {
//                 headers: { "X-Requested-With": "XMLHttpRequest" },
//             }).then(response => {
//                 const fileURL = response.data.secure_url
//                 this.setState({
//                     image: [...this.state.image, fileURL]
//                 }) // You should store this URL for future references in your app
//             })
//         });

//         // Once all the files are uploaded
//         axios.all(uploaders).then(() => {
//             alert('images added');
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <Dropzone
//                     onDrop={this.handleDrop}
//                     multiple
//                     accept="image/*"
//                 >
//                     <p>Drop your files or click here to upload</p>
//                 </Dropzone>
//             </div>
//         )
//     }
// }


//   //         {/* style={styles.dropzone} */}
