import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'

export default class Contact extends React.Component{
    constructor(props){
        super(props);
     this.state={
         mail:'',
         number:'',
     }
     this.onMailChange = this.onMailChange.bind(this);
     this.onNumberChange = this.onNumberChange.bind(this);

    }
 
onMailChange(event){
   
    this.setState({
   mail:event.target.value
    })
}

onNumberChange(event){
   
    this.setState({
   number:event.target.value
    })
}
    render(){
        return(
            
           <div className="col" style={{ margin:50,marginLeft:'40%' }}>
            
            <div className="col-xs-10 col-xs-offset-1">
                <input style={{ height:50,width:250,borderColor:"#000000",borderWidth:2,fontWeight:'bold',marginTop:'3%' }} className='inputtext' placeholder="email-id" value={this.state.mail} onChange={this.onMailChange}/>
                 </div>
                <div className="col-xs-10 col-xs-offset-1">
                <input style={{ height:50,width:250,borderColor:"#000000",borderWidth:2,fontWeight:'bold',marginTop:'3%' }} className='inputtext' placeholder="number" value={this.state.number} onChange={this.onNumberChange}/>
                   </div>
                   <Link to={{
                        pathname: '/thirdpage',
                        state: {
                            mail: this.state.mail,
                            number:this.state.number}}}>
                   <button style={{ marginTop:'3%',marginLeft:'5%',backgroundColor:'#fff',borderRadius:10,borderColor:"#000000",borderWidth:2,height:35,width:100 }}>submit</button>
                   </Link>
                </div>
                
                
              
        );
    }
}