import React from 'react'
import { Playlist } from "./SamplePlaylist";
import Track from "../logo.svg"

const trackName=" Trackname";
const artistName="artist";

export default function Sidebar(){
    return (
      
    <div className="sidebar">

      <div className="logo">
          Muzes
      </div>

      <div className="navigation">
        <ul>
          <li>
          <a href="">
          <span className="fa fa-home"></span>
          <span>Home</span>
          </a>
          </li>

          <li>
          <a href="#">
          <span className="fa fa-search"></span>
          <span>Search</span>
          </a>  
          </li>

          <li>
          <a href="#">
          <span className="fa fa-book"></span>
          <span>Library</span>
          </a>
          </li>
        </ul>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <a href="#">
              <span className="fa fas fa-plus-square"></span>
              <span>Create Playlist</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="fa fas fa-heart"></span>
              <span>Liked Songs</span>
            </a>
          </li>
        </ul> 
      </div>
{/* playlists */}
      <div className="navigation">
        <div className='Playlist-container'>
          <div className='Playlist-name'>
            <p>Playlist</p>
          </div>

          <div className='Playlist-scroll'>
          {
            Playlist && Playlist.map((list)=>(
            <div className='items'>
              <span className="fa fa-music"></span>
              <a href=''>Sample name</a>
            </div>
            ))
          }
          </div>
        </div>
      </div>

{/* tracker */}
      <div className="navigation">
        <div className='tracklist'>

          {/* <div className='top'>
            <img src={Track} alt="track"/>
            <p> {trackName} <span>{artistName} </span></p>
          </div> */}

          <div className='bottom'>
            <span className="fa fa-volume-high"></span>
            <input type='range'/>
          </div>

        </div>
      </div>
    
    </div>
      
    )
}


