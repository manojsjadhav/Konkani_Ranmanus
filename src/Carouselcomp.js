import React from 'react'

function Carouselcomp({logo,icon,writer,type,comment}) {
    return (
        <div>
                <div className="py-5">
                    <div>{logo}</div>
                    <p>{comment}</p>
                    <div>{writer}</div>
                    <div>{icon}{icon}{icon}{icon}{icon}</div>
                    <p>{type}</p>
                </div>
            
        </div>
    )
}

export default Carouselcomp
