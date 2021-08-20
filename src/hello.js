import React from 'react';




const Hello =(props)=>{

return(
	<div className='tc bg-light-green dib br3 pa3 ma2 bw2 grow shadow-5'>
	<div>
	 <img src={props.picture}/>
	</div>
	<div>
	<h1>{props.username}</h1>
	<p>{props.email}</p>
	</div>
	</div>
	);

}

export default Hello;