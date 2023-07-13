import React,{useState,useEffect} from 'react'
import {Songs} from './SampleSongs'
import MusicPlayer from './MusicPlayer';

export default function PlaylistSongs() {
  const [songs, setSongs] = useState(Songs);
  const [song, setSong] = useState(songs[0].song);
  const [img, setImage] = useState(songs[0].imgSrc);
  const [auto, setAuto] = useState(false);

// setting active class

useEffect(() => {
  const allSongs = document.querySelectorAll(".songs");
  function changeActive() {
    allSongs.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");
  }

  allSongs.forEach((n) => n.addEventListener("click", changeActive));
}, []);


  const changeFavourite=(id) =>{
    Songs.forEach((song) => {
      if (song.id === id) {
        song.favourite = !song.favourite;
      }
    });

    setSongs([...songs]);
  }

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImage(imgSrc);
    setAuto(true);
  };

  return (
    <div className='audioList'>
      <div className='songsContainer'>
        {
          Songs && Songs.map((song,index)=>(
            <div className='songs' key={song?.id}

            onClick={() => setMainSong(song?.song, song?.imgSrc)}
            >
              <div className='count'>{`#${index + 1}`}</div>

              <div className='song'>
              
                <div className='imgBox'> 
                  <img src={song?.imgSrc} alt='song'/>
                </div>

                <div className='section'>
                  <div className='songName'>
                    <p>{song?.songName}
                    <span className='spanArtist'> {song?.artist} </span> 
                    </p>

                    <div className='hits'>
                      <p className='duration'>
                        <span className='fa-regular fa-clock'></span>
                        3:04
                      </p>

                      <div className='favourite'  onClick={() => changeFavourite(song?.id)}>
                      {
                        song?.favourite ? 
                        <span className='fa fa-heart'></span>
                        :
                        <span className="fa-regular fa-heart"></span>
                      }
                           
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <MusicPlayer song={song} imgSrc={img}/>
    </div>

  )
}
