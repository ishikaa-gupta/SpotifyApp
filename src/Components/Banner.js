import React from 'react'
import bannerImg from "../BannerImg.jpg"

const PlaylistName="Wa-paah"

export default function Banner() {
  return (
    <div className='banner'>
        <img src={bannerImg} alt='spotify banner'/>
        <div className='content'>
            <div className='artist'>
                <div className='left'>
                    <h2>{PlaylistName}</h2>
                </div>
                <div className='right'>
                    <a className='Play-btn' href="">Play</a>
                    <a className='following-btn' href=""><span className="fa fa-check"></span>Following</a>
                </div>
            </div>
        </div>
        <div className='bottom'></div>
    </div>
  )
}