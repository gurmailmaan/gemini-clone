import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext (Context)


  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user} alt="" />
        </div>
        <div className="main-container">
            {!showResult?
            <>
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
            </>
            :<div className='result'>
                <div className="result-title">
                    <img src={assets.user} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading?<div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                    </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                    
                </div>
            </div>
        }
            
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
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