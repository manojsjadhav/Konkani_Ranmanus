import React from "react";

import {Button} from "react-bootstrap";
import Header from  "./Header"
import Navbar from "./Navbar"
import Bottom from "./Bottom"
import Counter from "./Counter"
import Carousal from "./Carousal"
import Footer from "./Footer"
import { IoTelescopeSharp } from 'react-icons/io5';
import { FaRunning } from 'react-icons/fa';                     
import { GrMapLocation } from 'react-icons/gr';
import { VscOrganization } from 'react-icons/vsc';
import { GiGymBag } from 'react-icons/gi';
import { BsFillLightningFill } from 'react-icons/bs';
import { BiRupee } from 'react-icons/bi';
import { FaRupeeSign } from 'react-icons/fa';
import { MdAvTimer } from 'react-icons/md';
import { GiPerson } from 'react-icons/gi';
import { BiCurrentLocation } from 'react-icons/bi';
import { AiFillCar } from 'react-icons/ai';
import { AiOutlineComment } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { ImHappy } from 'react-icons/im';
import  konkan from './Assets/Konkan 10.jpg';
import  konkan1 from './Assets/Konkan 16.jpg';
import  konkan2 from './Assets/konkan 15.jpg';
import  konkan3 from './Assets/Konkan 13.jpg';
import konkan4 from './Assets/Konkan 19.jpg'

function Home(){

   const clickHandler = () => {
        window.location.href="http://localhost:3000/tourlist"
   }

     return ( 
     
     <div>
          <div className="container-fluid bgimage" >
          <Header />
          <Navbar />
               <div className="main">
                    
                    <div className="row"> 
                         <div className="col-md-3"> </div>
                         <div className="col-md-6 konkan"><h1>Konkani</h1> </div>
                    </div>

                   
                    <div className="row"> 
                         <div className="col-md-6"> </div>
                         <div className="col-md-3 Ranmanus"><h1>Ranmanus</h1> </div>
                    </div>
               
               </div>

               <div className="row tourbutton"> 
                    <div className="col-md-5 "> </div>
                         <div className="col-md-2  d-flex justify-content-center text-center mx-auto "> 
                              <button className="tour"><span>VIEW ALL TOURS</span></button>
                         </div>
                    <div className="col-md-5"> </div>
               </div>
          
          </div>  
{/*--------------------------------------------------------------------------------------------- */}   
          <div className="search">
               <h5 className="mt-5 text-center sft">SEARCH FOR TOUR</h5>
                    <div className="container-fluid mt-5 selectbar">  
                         <div className="row"> 

                              <div className="col-md-1">
                              </div>

                              <div className="col-md-2 d-flex justify-content-center text-center mx-auto">
                                   <select class="custom-select  px-3">
                                        <option selected>Activities</option>
                                        <option value="1">Trekking</option>
                                        <option value="2">Parasailing</option>
                                        <option value="3">Hiking</option>
                                        <option value="3">Boating</option>
                                        <option value="2">Scuba Diving</option>
                                        <option value="3">Climbing</option>
                                        <option value="3">Beach Trailing</option>
                                   </select>
                              </div>

                              <div className="col-md-2 d-flex justify-content-center text-center mx-auto">
                                   <select class="custom-select  px-3">
                                        <option selected>Destination</option>
                                        <option value="1">Goa</option>
                                        <option value="2">Malvan</option>
                                        <option value="3">Sawantwadi</option>
                                        <option value="3">Sindhudurg</option>
                                   </select>
                              </div>

                              <div className="col-md-2 d-flex justify-content-center text-center mx-auto">
                                   <select class="custom-select  px-3">
                                        <option selected>Duration</option>
                                        <option value="1">1 to 2 days </option>
                                        <option value="2">4 to 5 days</option>
                                        <option value="3">5to 7 days</option>
                                        <option value="3"> 7+ days</option>
                                   </select>
                              </div> 

                              <div className= "col-md-2 d-flex justify-content-center text-center mx-auto">
                                   <div className="form-group">
                                        <input style={{ paddingTop: '6px', paddingBottom: '6px' }} type="date"  placeholder="Date" 
                                             className="form-control" />
                                   </div>
                              </div>

                              <div className= "col-md-2  d-flex justify-content-center text-center mx-auto">
                                   <Button className="selectbutton px-5" variant="outline-success" onClick={clickHandler}>SEARCH</Button>
                              </div>

                              <div className="col-md-1">
                              </div>
                         </div>
                    </div>
          
          </div>
    {/*--------------------------------------------------------------------------------------------- */}   
          <div className="container-fluid mt-5 about">  
               <div className="row"> 
                    <div className="col-md-1"></div>
                         <div className="col-md-5">
                              
                              <div className="mt-5 icon">< IoTelescopeSharp size={42}/>
                              </div>
                              <h4 className="mt-4 akr"> ABOUT KONKANI RANMANUS </h4>
                              <hr  style={{color:"red",height: 5 }}/>
                              <p className="para">Konkani Ranmanus is a group of nature lovers who organize tours in a different and innovative way.

          We organize tour within Konkan region. Konkan Region is Western Coast of India ranging from Gujarat To Kerala. It’s occupied by Arabian Sea and Western Ghats.

          We are representing one of its beautiful part that is Sindhudurga District of the Konkan region. It is situated on the coastal border of Goa and Maharashtra.

          Sindhudurga has its own language and unique cultural heritage called Malvani.

          Konkani Ranmanus is Local Nature Man who is spending his life in the rural part of Konkan in jungles in a beautiful muddy house in farms surrounded by trees, flowers, lakes and rivers.

          We take you to these unique unexplored locations with Konkani Ranmanus from Jungles of the Western Ghats to the Bluish white sanded Arabian Sea. Tourist visiting Konkan and Goa can experiences such cultural, traditional, natural, artistic, sporty, adventures activities. They can live like a Nature Man and enjoy being in a wild.

          We are trying to explore the hidden, untouched beauty of this region through our Explore Konkan mission.</p>
                         </div>

                         <div className="col-md-5 mx-auto imagecenter" >
                              <p classsname="secret">SECRET ISLAND VISIT</p>
                              <hr style={{color:"red",height: 5 }}/>
                              <img src={konkan} className="image-fluid siv" alt="img"/>
                         </div>
                         <div className='col-md-1'></div>
                         
                         
               </div>
          </div>

     {/*--------------------------------------------------------------------------------------------- */}     
          <div className="cards">
               <div className="container">
                    <div className="row">
                         <div className="col-md-3 mt-5">
                              <FaRunning size={42} />
                              <h4>UNIQUE ACTIVITIES</h4>
                              <p>You get to experience activities like you never experienced. Our local blend of nature and people makes it so unique that you will never forget in a lifetime.</p>
                         </div>
                         <div className="col-md-3 mt-5">
                              <GrMapLocation size={42} />
                              <h3>BREATHTAKING LOCATIONS</h3>
                              <p>We take you to the locations which are unexplored, free of crowd and so beautiful that you will pinch yourself if you are not dreaming. We bet you will love these locations!</p>
                         </div>
                         <div className="col-md-3 mt-5">
                              <VscOrganization size={42} />
                              <h3>ORGANIZED TOURS</h3>
                              <p>We organize tours for 2/3/4 days. Or custom tours depending on what tourists wants to experience. We never hold back for our tourists.</p>
                         </div>
                         <div className="col-md-3 mt-5">
                              <GiGymBag size={42} />
                              <h4>EXPERIENCE FOR LIFETIME</h4>
                              <p>We know you will come back to us again for mesmerizing tour experience but we bet the experience you will have with us, you’ll cherish it forever.</p>
                         </div>
                    </div>
               </div>
          </div>
     {/*--------------------------------------------------------------------------------------------- */}   
          <div className="Philosophy">
               <div className="container-fluid phs"> 
                    <div className="row height">
                         <div className="col-md-3">
                         </div>
                         <div className="col-md-6 shift text-center  mx-auto">
                              <div><h3>OUR PHILOSOPHY</h3></div>
                              <div><hr style={{color:"red",height: 5 }}/></div>
                              <div><h5>PHILOSOPHY</h5></div>
                              <div><p>We are the team of local explorers.
We take you to only unexplored, peaceful and internal locations in Konkan region. Our trips are full of eco activities which supports local people here.

We promote and carry out responsible and sustainable tourism.</p></div>
                        
                         </div>
                         <div className="col-md-3">
                         </div>
                    </div>
               </div>
               
          </div>                    
 { /*--------------------------------------------------------------------------------------------- */} 
          <div className="margset">
               <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                         <h3 className="fopt text-center">FIND OUR POPULAR TOURS</h3>
                         <hr style={{color:"red",height: 5 }}/>
                    </div>
                    <div className="col-md-4"></div>
               </div>

               <div className="container-fluid">
                    <div className="row">
                         <div className="col-md-4 mt-3">
                              <Bottom imagesource={konkan1} badge="MOST LOVED" heading="BEACHSIDE TREKKING AND CAMPING"
                                   stay="2 Days / 1 Nights" originalamount="3000" discountedamount="2000" FaRupeeSign={<FaRupeeSign/>}
                                        BsFillLightningFill={<BsFillLightningFill size={28} color="lime"/>} MdAvTimer={<MdAvTimer size={30}/>} BiRupee={<BiRupee/>} />
                         </div>
                    
                         <div className="col-md-4 mt-3">
                              <Bottom imagesource={konkan2} badge="MOST LOVED" heading="BEACHSIDE TREKKING AND CAMPING"
                                   stay="2 Days / 1 Nights" originalamount="3000" discountedamount="2000" FaRupeeSign={<FaRupeeSign/>}
                                        BsFillLightningFill={<BsFillLightningFill size={28} color="lime"/>} MdAvTimer={<MdAvTimer size={30}/>} BiRupee={<BiRupee/>} />
                         </div>

                         <div className="col-md-4 mt-3">
                              <Bottom imagesource={konkan3} badge="MOST LOVED" heading="BEACHSIDE TREKKING AND CAMPING"
                                   stay="2 Days / 1 Nights" originalamount="3000" discountedamount="2000" FaRupeeSign={<FaRupeeSign/>}
                                   BsFillLightningFill={<BsFillLightningFill size={28} color="lime"/>} MdAvTimer={<MdAvTimer size={30}/>} BiRupee={<BiRupee/>} />
                         </div>
                    </div>
               </div>
          </div>
     { /*--------------------------------------------------------------------------------------------- */} 
     
          <div className="mx-20">
               <div className="container">
                    <div className="row">
                         <div className="col-md-3">
                              <Counter icon={<GiPerson size={40} />} initialvalue={750} finalvalue={25000} heading="Awesome Tourists" />          
                         </div>
                          <div className="col-md-3">
                              <Counter icon={<BiCurrentLocation size={40} />} initialvalue={0} finalvalue={3000} heading="Stunning Locatons " />          
                         </div>
                          <div className="col-md-3">
                              <Counter icon={<AiFillCar size={40} />} initialvalue={50} finalvalue={5000} heading="Tours Organised" />          
                         </div>
                          <div className="col-md-3">
                              <Counter icon={<ImHappy size={40} />} initialvalue={750} finalvalue={25000} heading="Awesome Happy Faces" />          
                         </div>
                    </div>
               </div>
               <h6 className="d-flex justify-content-center text-center mx-auto middleheading py-5"style={{opacity:0.5}}>DON’T HOLD BACK EXPLORE THE HEAVENLY KONKAN WITH US TODAY!!!</h6>
          </div>
          <h3 className="d-flex justify-content-center text-center mx-auto middleheading pt-5 review">CUSTOMER REVIEWS</h3>
          <Carousal logo={<AiOutlineComment size={30}/>} icon={<AiFillStar size={30}/>}/>       
       { /*------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}  
          <div className="footertopheader">
               <div className="container-fluid">
                    <div className="row">
                         <div className="col-md-6 d-flex justify-content-center text-center mx-auto gx-0">
                              <img src={konkan4} className="w-100" style={{height:"60vh"}} alt="img"/>
                         </div>
                         <div className="col-md-6 gx-0 bg-warning colorproperty" style={{height:"60vh"}}>
                              <div className="row pt-5" style={{height:"60vh"}}> 
                                   <div className="col-md-8 offset-md-2 pt-5">
                                        <h3 className="">SUBSCRIBE</h3>
                                        <h6 className="pt-1 pb-3 ">To receive promotions and newsletter</h6>
                                        <div className="form-group ">
                                             <div className="subscribe mx-auto mt-5"><input type="text" className="form-control w-75" placeholder="Enter Your Email Address" id="usr" name="username"/>
                                             <Button className="" variant="outline-primary">Primary</Button>
                                             </div>
                                        </div>
                                   </div>

                                    
                              </div>
                         </div>
                        
                    </div>
               </div>
          </div>

       { /*------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}       

          <Footer />
          
     
     
     
     
     
     
     
     
     
     
     
     
     </div>


               );
          }
          export default Home

