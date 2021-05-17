import React ,{Component} from 'react';

import Display from './Display/Display';



class Main extends Component{
	// constructor(){
	// 	super()
		
	// }
	
	// state
	state = {

	}
	//render 
	render(){
		return(
			<div>
				<Display/>
				<div>input</div>
				<div>button calculator</div>
			</div>
		)
	}
}

export default Main ;