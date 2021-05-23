
import React ,{useRef,useState} from 'react';
import IdleTimer from 'react-idle-timer'
import Modal from "react-modal"
 
Modal.setAppElement("#root")
const IdleCounter = () => {
	const [islogin , setIslogin]= useState(true)
	const [modalIsopen, setModalIsOpen]= useState(false);
	const IdleRef = useRef(null);
	const sessionTimeout = useRef(null)
	const onIdle = ()=>{
		console.log("idle is " )
		setModalIsOpen(true)
		sessionTimeout.current = setTimeout(handleLogout,5000)
	}
	const handleLogout = ()=>{
		setModalIsOpen(false)
		setIslogin(false)
		clearTimeout(sessionTimeout.current)
	}
	const handleStay =()=>{
		setModalIsOpen(false)
		setIslogin(true)
		clearTimeout(sessionTimeout.current)
	}
	return ( 
		<div>
			{islogin ?  <h1>hello kia</h1> :  <h1>hello guest</h1>}
			<Modal isOpen={modalIsopen}>
				<h2>kia is ready in idle</h2>
				<p>you have been log out soon</p>
				<div>
					<button onClick={handleLogout} >logout</button>
					<button onClick={handleStay} > stay </button>
				</div>
			</Modal>
			<IdleTimer  
			ref={IdleRef}
			timeout={5*1000}
			onIdle={onIdle}
			></IdleTimer> 

		</div>
	 );
}
 
export default IdleCounter;