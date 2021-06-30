import React, { Component } from 'react';

class Clickevent extends Component {
state = { 
    count:0,
};
 

buttonClick=()=>{
    this.setState(current=>({count:current.count+2}));
}
buttonClick2=()=>{
    this.setState(current=>({count:current.count+1}));
}
       render(){

           return (
               <div>
<h1>{this.state.count} </h1>
         <button onClick={()=>this.buttonClick()} >Click</button>
        <button onClick={()=>this.buttonClick2()} >Click</button>
            </div>
        )
    } 
}

export default Clickevent;