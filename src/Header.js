import React from "react"
import { FaPhoneSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import {  } from "react-icons/fa";
import {Button , ButtonToolbar} from "react-bootstrap";
import LoginModal from "./LoginModal"

 
function Header() {

    const [modalShow, setModalShow] = React.useState(false);

     return ( 
               <div className="Header">
                    <div className="row">
                            <div className="col-md-2 col-12 my-10px mx-auto">
                             <i><FaPhoneSquare color="white" size="25px"/> <span className="phone">+91 75885 31978</span> </i>
                            </div>
                            <div className="col-md-2 col-12 my-10px mx-auto">
                              <i ><FaWhatsappSquare color="white" size="25px"/><span className="phone">+91 75885 31978 </span> </i>
                            </div>
                            <div className="col-md-4 col-12 my-10px mx-auto"></div>
                            <div className="col-md-2 col-12 my-10px mx-auto">
                               <a className="social" href='https://www.facebook.com/konkaniranmanus/'> <i className="socialLink"> <FaFacebookSquare color="white" size="25px"/></i></a>
                               <a className="social" href='https://www.youtube.com/channel/UCfHgBVb438Tp0pL8DeT6d4A/featured'> <i className="socialLink"> <FaYoutubeSquare color="white" size="25px"/></i> </a>
                               <a className="social" href='https://www.instagram.com/konkaniranmanus/'> <i className="socialLink"><FaInstagramSquare color="white" size="25px"/></i></a>
                               <a className="social" href='http://konkaniranmanus.com/#'> <i className="socialLink"><FaTwitterSquare color="white" size="25px"/></i></a>
                            </div>
                            <div className="col-md-1 col-4 my-10px mx-auto">
                              <ButtonToolbar>
                              <Button className="btn btn-outline-info login btn-sm" onClick={() => setModalShow(true)}><FaUnlock/>LOGIN</Button> 
                              <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
                             </ButtonToolbar>
                            </div>
                              
                            
                            <div className="col-md-1 col-4 my-10px mx-auto">
                            <ButtonToolbar>
                             <Button className="btn btn-outline-info signup btn-sm" onClick={() => setModalShow(true)}><FaUserLock/>SIGNUP</Button> 
                             <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
                            </ButtonToolbar>
                            </div>
                          </div>
                        </div>    
    )
}
export default Header

