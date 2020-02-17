import React from 'react';
import io from 'socket.io-client';

class SendChatMessage extends React.Component {

  render(){
  return (
    <textarea value={this.props.value} style={{ display:this.props.displayChat, height:'70px'}}
     name={this.props.name} onChange={this.props.onChange}></textarea>
  )
}
}

export default SendChatMessage;
