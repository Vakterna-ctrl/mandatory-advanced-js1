import React from 'react';
import io from 'socket.io-client';
import List from './List'

const socket = io('http://3.120.96.16:3000');

class ChatWindow extends React.Component {
  render(){
    let chatStyle= {
      height: "500px",
      width: '400px',
      border: "1px solid lightgrey",
      background: '#FFF8DC',
      display: this.props.displayChat,
    }
  return (
    <div style={chatStyle}>
    <List />

    </div>
  )
}
}
export default ChatWindow;
