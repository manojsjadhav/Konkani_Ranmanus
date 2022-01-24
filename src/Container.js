import React from 'react'

function Container(image) {
    return (
        <div>
            <div className="container-fluid px-3 gx-3 py-3">
                <div className="row">
                    <div className="col-md-3 mx-auto">
                        <div>{image}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container
