import React from 'react';
import io from 'socket.io-client';

class Login extends React.Component {

  render(){
  return (
    <input
    style={{display:this.props.displayLogin}}
    type="text" value={this.props.username}
    onChange={this.props.onChange} placeholder="please type in your username"
    name={this.props.name}
    />
  )
}
}

export default Login;
