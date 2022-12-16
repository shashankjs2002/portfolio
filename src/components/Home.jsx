import React from 'react'
import MeriFotu from './assets/fotu2.png'

const Home = () => {
  return (
    <div className='' id='home'>
    
        <div className="name">
          <div className="hi">
            <span style={{fontSize:"50px"}}>Hi,</span> 
            <span> I'm 
            <br/>
              <span style={{fontSize:"75px", color:"aquamarine"}}> Shashank</span>
              {/* <div>J. Sirothiya</div> */}
            </span>
          </div>
        </div>
        <div className='fotu' style={{justifyContent: "center", display:"flex"}}>
          <img src={MeriFotu} alt="" />
        </div>
    </div>
  )
}

export default Home