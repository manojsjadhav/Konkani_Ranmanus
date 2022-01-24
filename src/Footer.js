import React from 'react'
import {FiPhone} from 'react-icons/fi'; 
import {FaWhatsappSquare} from 'react-icons/fa';
import {MdLocalPostOffice} from 'react-icons/md';
import {RiVisaFill} from 'react-icons/ri';
import {FaCcPaypal} from 'react-icons/fa';
import {FaCcMastercard} from 'react-icons/fa';
import {FaCcJcb} from 'react-icons/fa';

function Footer() {
    return (
        <div>
            <div className="container-fluid" style={{backgroundColor:"#000d21"}}>
                <div className="row py-5 px-5">
                    <div className="col-md-3 propertiesfoottop">
                        <h5 className="pb-3 pt-3 ">CONTACT INFO</h5>
                        <div className="d-flex" ><h6 className="pe-2">Phone</h6><FiPhone /><h6 className="ps-2">+91 75885 31978</h6></div>
                        <div className="d-flex" ><h6 className="pe-2">WhatsApp</h6><FaWhatsappSquare /><h6 className="ps-2">+91 70386 81978</h6></div>
                        <div className="d-flex" ><MdLocalPostOffice /><h6 className="ps-2">+91 70386 81978</h6></div>
                    </div>
                    <div className="col-md-3 propertiesfoottop">
                        <h5 className="pb-3 pt-3 ">ABOUT US</h5>
                            <p>Our Story</p>
                            <hr/>
                            <p>Travel Blogs & Tips</p>
                            <hr/>
                            <p>Working With Us</p>
                            <hr/>
                            <p>Be Our Partner</p>
                            <hr/>
                    </div>
                    <div className="col-md-3 propertiesfoottop">
                        <h5 className="pb-3 pt-3 ">Support</h5>
                            <p>customer Support</p>
                            <hr/>
                            <p>Privacy & POlicy</p>
                            <hr/>
                            <p>Contact Channels</p>
                            <hr/>
                    </div>
                    <div className="col-md-3 propertiesfoottop">
                        <h5 className="pb-3 pt-3 ">Pay Safely With Us</h5>
                            <p>The payment is encrypted and transmitted securely with an SSL protocol.</p>
                            <div className="d-flex">
                                <div className="pe-2"><RiVisaFill size={40} color={"yellow"} /></div>
                                <div className="px-2"><FaCcPaypal size={40} color={"red"}/></div>
                                <div className="px-2"><FaCcMastercard size={40}color={"green"}/></div>
                                <div className="ps-2"><FaCcJcb size={40} color={"orange"}/></div>
                            </div>
                    </div>
                </div>
            </div>
             <div className="container-fluid text-center bg-dark">
               <div className="row py-4">
                <h6 className="propertiesfoottop"> © 2019 KONKANI RANMANUS. ALL RIGHTS RESERVED </h6>
               </div>
          </div>
            
        </div>
    )
}

export default Footer
