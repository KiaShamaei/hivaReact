import React, { useEffect, useState } from 'react';


const GetCurrentPosition = () => {
	const[status,setStatus]=useState("");
	const [lat,setLat]= useState("");
	const [lng,setLng]= useState("");
	const get =()=>{
	
		if (!navigator.geolocation) {
			setStatus('Geolocation is not supported by your browser');
		  } else {
			setStatus('Locating...');
			navigator.geolocation.getCurrentPosition((position) => {
			  setStatus(null);
			  setLat(position.coords.latitude);
			  setLng(position.coords.longitude);
			  console.log(position)
			}, (err) => {
			  setStatus('Unable to retrieve your location');
			  console.log("---------->",err)
			});
		  }
	}
useEffect(()=>{
	get();
},[])

	return(<div>{lat}---{lng}--{status}</div>)
  }
export default GetCurrentPosition;