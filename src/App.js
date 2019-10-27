import React from 'react';
import Navigationbar from './Navigationbar';

class App extends React.Component {  
  // constructor(props){
  // super(props);
  // }

  render(){
      return (
        <div className="container">
        <nav className="navbar navbar-dark bg-dark " style={{ backgroundColor:'#D3D3D3'}}>
           <div className="navbar-brand">
             <Navigationbar location={this.props.location}/>      
            </div>
        </nav>
    </div>
      
  );
}
}
export default App;
