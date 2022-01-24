import React from 'react';


function Rough({badge,heading,stay,originalamount,discountedamount,imagesource,FaRupeeSign
,BsFillLightningFill,MdAvTimer,BiRupee}) {
   
   
    return (
         <div>
               <div className="badgecontainer">
                    <img src={imagesource} className="img-fluid rounded w-100" style={{height:"50vh"}} alt="img"/>
                         <div class="badge bg-warning p-2">{badge}</div>     
               </div>

               <div className="d-flex justify-content-center p-3">
                    <div>{BsFillLightningFill}
                         <h6>{heading}</h6>
                    </div>
               </div>
               
               <div className="row">
                                  
                    <div className="col-md-6 d-flex justify-content-center text-center mx-auto"> 
                         <div className="days"><div>{MdAvTimer}</div>{stay}</div>
                    </div> 
                                        <div className="col-md-6 "> 
                                             <div className="row">
                                                  <div className="col-md-12 d-flex justify-content-center text-center mx-auto">
                                                       <div className="rup"><div>{BiRupee}</div>{originalamount}</div>
                                                  </div>
                                             </div>
                                             <div className="row">
                                                  <div className="col-md-12 d-flex justify-content-center text-center mx-auto">
                                                       <div className="rups"><div>{FaRupeeSign}</div>{discountedamount}</div>
                                                  </div>
                                             </div>
                                        </div>
                                   
                                   
                              </div>
                        
                         
          </div>
     
     
    )
}

export default Rough
