import React ,{useState}from 'react';
import {ChromePicker} from 'react-color'


const ColorPicker = () => {
	const[color,setColor]=useState("#fff");
	const [show , setShow]=useState(false);
	return ( 
		<div>
			<p>your choosen {color}</p>
			{
				show && <ChromePicker 
				color={color} 
				onChange={prev=>setColor(prev.hex)}/>
			}
			<button onClick={()=>setShow(show=>!show)}>{show?"close picker": "show color picker"}</button>


		</div>
	 );
}
 
export default ColorPicker;