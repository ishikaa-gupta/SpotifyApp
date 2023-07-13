// import React, { useEffect, useState } from 'react';
// import useAuth from './useAuth';
// import axios from 'axios';

// export default function PlaylistComponent({ code }) {
//   const { accessToken } = useAuth(code);
//   const [playlists, setPlaylists] = useState([]);

//   useEffect(() => {
//     if (accessToken) {
//       getUserPlaylists();
//     }
//   }, [accessToken]);

//   const getUserPlaylists = async () => {
//     try {
//       const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
//         headers: {
//           'Authorization': 'Bearer ' + accessToken,
//         },
//       });
//       const playlists = response.data.items;
//       setPlaylists(playlists);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <h2>My Playlists</h2>
//       {playlists.map((playlist) => (
//         <div key={playlist.id}>
//           <h3>{playlist.name}</h3>
//         </div>
//       ))}
//     </div>
//   );
// }