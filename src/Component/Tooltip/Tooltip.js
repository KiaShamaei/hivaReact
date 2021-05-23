import React ,{forwardRef} from "react";
import Tippy from "@tippy.js/react";

import "tippy.js/dist/tippy.css";

const TootipComponet = ()=>{
	return (
		<span style={{color : "coral"}}>This a component</span>
	)
}

const CustomChild = forwardRef((props,ref)=>{
	return (
		<div ref={ref}>
			<div>first line </div>
			<div>Second line </div>
		</div>
	)

})
const Tooltip = () => {
  return (
    <div>
      <div style={{paddingBottom: "2rem"}}>
        <Tippy content="Basic Tooltip">
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{paddingBottom: "2rem"}}>
        <Tippy content={<span style={{color : "crimson"}}> this true</span>}>
          <button>Hover</button>
        </Tippy>
      </div>
	  <div style={{paddingBottom: "2rem"}}>
        <Tippy content={<TootipComponet/>}>
          <button>Hover</button>
        </Tippy>
      </div>
	  <div style={{paddingBottom: "2rem"}}>
        <Tippy 
		content={<TootipComponet/>}
		delay={1000}
		placement ={"right"}
		arrow={false}
		>
          <CustomChild />
        </Tippy>
      </div>
    </div>
  );
};

export default Tooltip;
