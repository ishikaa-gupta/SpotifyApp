import React,{useState,useRef,useEffect} from 'react'

export default function MusicPlayer(props) {
  const [isLove, setLoved] = useState(false);
  const [isPlaying, setPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrenttime] = useState(0);

  const audioPlayer = useRef(); 
  const progressBar = useRef();
  const animationRef = useRef(); 

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);

    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);


  const changeLoved = () => {
    setLoved(!isLove);
  };

  const changePlayPause = () => {
    const prevValue = isPlaying;
    audioPlayer.current.currentTime = 0;

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
      
    } else {
      audioPlayer.current.pause();  
      cancelAnimationFrame(animationRef.current);
    }
    setPlay(!prevValue);
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };


  const CalculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMin} : ${returnSec}`;
  };

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrenttime(progressBar.current.value);
  };

   
  return (
    <div className='musicPlayer'>
        <div className='songImage'>
            <img src={props.imgSrc} alt=''/>
        </div>
        <div className='songAttributes'>
            <audio src={props.song} preload='metadata' ref={audioPlayer}/>

            <div className='top'>
                <div className='left'>
                    <div className='loved' onClick={changeLoved}>
                        {isLove? (<span className="fa fa-heart"></span>)
                        : (<span className="fa-regular fa-heart"></span>)}
                    </div>
                </div>

                <div className='middle'>
                    <div className="back">
                        <span className="fa fa-backward-step"></span>
                        <span className="fa fa-backward"></span>
                    </div>

                    <div className="playPause" onClick={changePlayPause}>
                        {isPlaying ? (<span className="fa fa-pause"></span>) : (<span className="fa fa-play"></span>)}
                    </div>

                    <div className="forward">
                        <span className="fa fa-forward"></span>
                        <span className="fa fa-forward-step"></span>
                    </div>
                </div> 
                <div className='right'>
                    <span className="fa fa-share"></span>
                </div>
            </div> 
            
            <div className='bottom'>
                <div className='currentTime'>{CalculateTime(currentTime)}</div>
                <input type='range' className='progressBar' ref={progressBar} onChange={changeProgress}/>
                <div className='duration'>{duration && !isNaN(duration) && CalculateTime(duration)}</div>
            </div> 
        </div>
    </div>
  )
}
