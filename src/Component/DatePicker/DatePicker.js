import React , {useState}from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const Date = () => {
	 const [selected , setSelected]= useState(null)
	return ( 
		<DatePicker
		selected = {selected}
		onChange={date=>setSelected(date)}
		
		/>
	 );
}
 
export default Date;