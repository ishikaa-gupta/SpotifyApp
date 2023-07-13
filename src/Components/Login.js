import React from 'react'

const ClientID = "a5a426ba49a74f4b897a06201bdf9a8b";
const Auth_URL = `https://accounts.spotify.com/authorize?client_id=${ClientID}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

export default function Login() {
    return (
      <div>
        <a className='login-btn' href={Auth_URL}>Log In</a>
      </div>
    );
}
