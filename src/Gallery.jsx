import React from "react"
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"
// import ReactPlayer from "react-player";
const Gallery = () => {
     return (
     <div>
          <div className= "bg-info">
               <Header />
          </div>
               <Navbar /> 
          <div>
               <div className="container">
                    <div className="row">
                         <div className="offset-md-3 col-md-2" Style={{height:'50vh',width:'100%'}}>
                        
                         </div>
                    </div>
               </div>
          </div>
          
          <Footer />
     </div>
     )
}

export default Gallery