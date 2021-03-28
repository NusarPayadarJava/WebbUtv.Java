import React from 'react'
import PokeBild from './PokeBild';
import PokeName from './PokeName';
import './style.css';  

class Popup extends React.Component { 
     
  render() {  
return (   

<div className='popup'> 
{this.props.bild}
     {this.props.bild2} 
<div className='popup\_inner'> 

     <h6>{this.props.name}</h6>
     <h6>{this.props.id}</h6>
     <h6>{this.props.weight}</h6>
     <h6>{this.props.height}</h6>

     </div>  
<button onClick={this.props.closePopup}>close </button>  

</div>  
);  
}  
}  

export default Popup;