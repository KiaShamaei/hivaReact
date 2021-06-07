import React from 'react';
import './App.css';
// import IdleCounter from './Component/IdelConuter/IdleCounter';

// import ColorPicker from './Component/ColorPicker.js/Color';
import Date from './Component/DatePicker/DatePicker';
import GetCurrentPosition from './Component/GetCurrentposition';


function App() {
  return (
    <div className="App">
		{/* <IdleCounter /> */}
		{/* <ColorPicker /> */}
		{/* <Date/> */}
		<GetCurrentPosition/>
    </div>
  );
}

export default App;
