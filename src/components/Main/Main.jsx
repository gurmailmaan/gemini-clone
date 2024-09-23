import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Make a list of fun activities for a day trip</p>
                    <img src={assets.tennis} alt="" />
                </div>
                <div className="card">
                    <p>Outline an organized & logical sales pitch for a new product</p>
                    <img src={assets.pen} alt="" />
                </div>
                <div className="card">
                    <p>Suggest videos to quickly solve a problem</p>
                    <img src="https://www.gstatic.com/images/branding/productlogos/youtube/v9/192px.svg" alt="" />
                </div>
                <div className="card">
                    <p>create trivia questions about a specific topic</p>
                    <img src={assets.think} alt="" />
                </div>
            </div>
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder='Enter a prompt here'/>
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className='bottom-info'>
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
            </p>
        </div>
    </div>
  )
}

export default Main