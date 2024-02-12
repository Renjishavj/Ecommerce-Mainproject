import React from 'react'
import logo from "../../Images/epitome.jpg"
import { faFacebookF, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import first from "../../Images/visa.png"
import second from "../../Images/rupay.png"

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-sub'>
            <div>
                <div><img src={logo} alt="" className='footer-logo' /></div>
                <div className='footer-logo-des'><p className='desc-logo'>Category to popular is not simply random text it has.</p></div>
                <div className='footer-socialmedia-logos'>
                    <div className='foot-sc'><FontAwesomeIcon icon={faFacebookF}  className='f-icons-f'/></div>
                    <div className='foot-sc'><FontAwesomeIcon icon={faTwitter} className='f-icons-t'/></div>
                    <div className='foot-sc'><FontAwesomeIcon icon={faYoutube}className='f-icons-y'/></div>
                    
                 </div>
            </div>
            <div className='footer-second-sub-one'>
                <div className='med-foot-one'>
                    <ul className='foot-ul'>
                            <li><h3 className='foot-headings'>ABOUT</h3></li>
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Wholesale</li>
                            <li>Cleartrip</li>
                    </ul>
                </div>
                <div className='med-foot-two'>
                <ul className='foot-ul'>
                            <li><h3 className='foot-headings'>HELP</h3></li>
                            <li>Payments</li>
                            <li>Shipping</li>
                            <li>Cancellation & Returns</li>
                            <li>FAQ</li>
                            
                    </ul>
                </div>
                <div className='med-foot-three'>
                <ul className='foot-ul'>
                             <li><h3 className='foot-headings'>CONSUMER POLICY</h3></li>  
                            <li>Cancellation & Returns</li>
                            <li>Terms of use</li>
                            <li>sercurity</li>
                            <li>Privacy</li>
                            <li>Sitemap</li>
                            
                            
                    </ul>
                </div>
                <div className='med-foot-four'>
                <ul className='foot-ul'>
                             <li><h3 className='foot-headings'>PAY WITH</h3></li>  
                            
                            <li>
                                <div className='pay-logos'>
                                   <div><img src={first} alt="" /></div> 
                                    <div><img src={second} alt="" /></div>
                                </div>
                            </li>
                            
                            
                    </ul>
                </div>
            </div>
        </div>
        <hr className='footer-horizontal' />
        <p className='copyright'>Copyright@2022 Epitome Co,Ltd.All Rights Reservd</p>
      
    </div>
  )
}

export default Footer
