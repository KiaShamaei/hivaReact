import React ,{useState} from 'react';
import Modal from "react-modal";


Modal.setAppElement('#root')
const ModalComponent = () => {
	const [openModal,setOpenModal]=useState(false);
	return ( 
		<div>
			<button onClick={()=>setOpenModal(true)}>open</button>
			<Modal
			 isOpen={openModal} 
			 onRequestClose={()=>setOpenModal(false)}
			 style = {
				 {
					 content : {
						 color : "crimson"
					 },
					 overlay : {
						 background : "grey"
					 }
				 }
			 }
			 >
				<h2>this is modal</h2>
				<p>this is text sample </p>
				<button onClick={()=>setOpenModal(false)}>close</button>
			</Modal>
		</div>
	 );
}
 
export default ModalComponent;