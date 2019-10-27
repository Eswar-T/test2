import React from 'react'
import { Link } from 'react-router-dom'


class Navigationbar extends React.Component{
render(){
    return(
     
<div>
        <Link to='/'>
        <img src="https://adroitco.com/wp-content/uploads/2016/04/logo-e1561972367715.png" width="120" height="30" alt=""/>
        </Link>            
        <Link to={"/contact"} className="float-sm-right">Contact</Link>
        
</div>
    );
}
}

export default Navigationbar;