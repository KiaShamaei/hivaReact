import React from 'react';
import "./Display.css"
import { FaBeer } from 'react-icons/fa';

import {MdAlarm} from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// icon and toastify is here
toast.configure()
const Display = () => {
	const notify = () =>{
		toast("basice toast", {position : toast.POSITION.BOTTOM_RIGHT})
		toast.info("chech part ", {position : toast.POSITION.TOP_CENTER,
		autoClose : 8000
		})
	}
	return ( 
		<IconContext.Provider value={{color : "crimson"}}  >
		<div className="display">
			<FaBeer  size="10rem"/>
			<MdAlarm  size="5rem"/>
			<button onClick={notify}>click</button>



		</div>
		</IconContext.Provider>
	);
}
 
export default Display;