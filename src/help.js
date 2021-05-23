/*
//--------npm i react-icon --save
import name of component use it in other component pass props feather
import {IconContext} from 'react-icon' wrap  all icon component and pass value props to context provider 
---------------------------------
//---------Toastify npm i react-toastify 
import toast from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
add toast.configure()
add handler ex ---- const notify = ()=>{
	toast.info('text or component',{position  : ... , autoClose })
}
---------------------------------
//--------------Modal npm i react-modal 
import Modal from 'react-modal' add component in open close tag put content of modal and manage open close 
with isOpen = {true} props.
props onRequestClose is for close in other site .
props className for class of modal and overLayClassName for overlay class.
----------------------------------
//-------------tooltip npm i '@tippy.js/react'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
wrapper element you want hover show tooltip 
props : {content = string - html - reactComponent
arrow = false or true 
delay = {1000}
placement = "right"
if wrap component in Tippy must use forwardRef
ex const customChild = forwardRef (props , ref )=>{
	return (
		<div ref={ref}>
		<p>tooltip active when hover this p </p>
		<div>
	)
}
} 

*/