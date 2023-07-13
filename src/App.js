import React, { useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import MainContainer from './Components/MainContainer';
import PlaylistComponent from './Components/PlaylistComponent';

const code = new URLSearchParams(window.location.search).get('code');

function App() {

  return (
    <div className="App">
      <p>My app works!</p>
      <Sidebar />
      <Navbar code={code} />
      <MainContainer/>
      {/* <PlaylistComponent code={code}/> */}
    </div>
  );
}

export default App;