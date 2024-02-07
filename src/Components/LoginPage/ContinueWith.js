import React from 'react'
import facebook from "../../Images/facebook (2).jpg"
import twitter from "../../Images/twitter.jpg"
import google from "../../Images/google (1).jpg"
function ContinueWith() {
  return (
    <div className='continue-with'>
        <div>
            <div className='google-div'>
                <div><img src={google} alt="" /></div>
                <div>Google</div>
            </div>
        </div>
        <div >
            <div className='facebook-div'>
                <div><img src={facebook} alt="" /></div>
                <div>Facebook</div>
            </div>
        </div>
        <div>
            <div className='twitter-div'>
                <div><img src={twitter} alt="" /></div>
                <div>Twitter</div>
            </div>
        </div>
    </div>
  )
}

export default ContinueWith
