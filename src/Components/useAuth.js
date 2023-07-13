import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [expiresIn, setExpiresIn] = useState(0);

  useEffect(() => {
    axios
      .post('http://localhost:3001/login', {
        code: code,
      })
      .then((res) => {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
      })
      .catch(() => {
        window.location = '/';
      });
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return
    const interval = setInterval(() => {
      axios
        .post("http://localhost:3001/refresh", {
          refreshToken,
        })
        .then(res => {
          setAccessToken(res.data.accessToken)
          setExpiresIn(res.data.expiresIn)
        })
        .catch(() => {
          window.location = "/"
        })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])


  return accessToken;
}


// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function useAuth(code) {
//   const [accessToken, setAccessToken] = useState('');
//   const [refreshToken, setRefreshToken] = useState('');
//   const [expiresIn, setExpiresIn] = useState(0);

//   useEffect(() => {
//     axios
//       .post('http://localhost:3001/login', {
//         code: code,
//       })
//       .then((res) => {
//         setAccessToken(res.data.accessToken);
//         setRefreshToken(res.data.refreshToken);
//         setExpiresIn(res.data.expiresIn);
//       })
//       .catch(() => {
//         window.location = '/';
//       });
//   }, [code]);

//   useEffect(() => {
//     if (!refreshToken || !expiresIn) return;
//     const interval = setInterval(() => {
//       axios
//         .post("http://localhost:3001/refresh", {
//           refreshToken,
//         })
//         .then(res => {
//           setAccessToken(res.data.accessToken)
//           setExpiresIn(res.data.expiresIn)
//         })
//         .catch(() => {
//           window.location = "/"
//         })
//     }, (expiresIn - 60) * 1000)

//     return () => clearInterval(interval)
//   }, [refreshToken, expiresIn])

//   const getUserPlaylists = async () => {
//     try {
//       const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
//         headers: {
//           'Authorization': 'Bearer ' + accessToken,
//         },
//       });
//       const playlists = response.data.items;
//       console.log(playlists);
      
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return {
//     accessToken,
//     getUserPlaylists,
//   };
// }