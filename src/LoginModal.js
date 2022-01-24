import React from 'react'
import {Modal} from "react-bootstrap"


function loginModal(props) {
    return (
    <div>
      
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
            </Modal.Title>
            </Modal.Header>
            <Modal.Body className="">
                <h4>Centered Modal</h4>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
        <Modal.Footer>
            <button onClick={props.onHide}>Close</button>
        </Modal.Footer>
    </Modal>
    </div>
  );
}



export default loginModal

