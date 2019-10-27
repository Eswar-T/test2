import React from 'react';

export default class Thirdpage extends React.Component{
  constructor(props){
      super(props);
      this.state={
        //   mail:this.props.location.state.mail,
        //   number:this.props.location.state.number
      }
  }

  componentDidMount(){
      console.log(this.props.location.state.mail,"location")
  }

    render(){
    return(
   <div>
       <h1>{this.props.location.state.mail}</h1>
       <h1>{this.props.location.state.number}</h1>
       </div>
    );
}}