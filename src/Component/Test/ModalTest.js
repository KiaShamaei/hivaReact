import React, {useState} from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const ModalTest = () => {
  const [openModal, setOpenModal] = useState(false);
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <Modal isOpen={openModal}>
        <div>
          <p>this is open Modal part </p>
          <button onClick={() => setOpenModal(false)}></button>
        </div>
      </Modal>
      <button onClick={() => setOpenModal(true)}>Open modalS</button>
     
    </div>
  );
};

export default ModalTest;
