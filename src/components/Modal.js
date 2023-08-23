import React,{useState} from "react";



const Modal=({onClose,show})=>{



    return(
    <div>        
    { show== true ? 
            <div className="modal-overlay">
                 <div>
                 <button className="modal-close" onClick={onClose}>Close</button>
                 <p className="modal-p">This is the content of the modal</p>
                 </div>
                
        </div> : "" }
        </div>
    )
}
export default Modal;