import React from 'react';
import io from 'socket.io-client';
import List from './List'

const socket = io('http://3.120.96.16:3000');

class ChatWindow extends React.Component {
  constructor(props){
    super(props)
    this.myChatWindow = React.createRef();
  }
  scrollBottom = () =>{
    this.myChatWindow.current.scrollTop = this.myChatWindow.current.scrollHeight
  }
  componentDidUpdate = () =>{
    this.scrollBottom()
  }


  render(){
    let chatStyle= {
      height: "500px",
      width: '400px',
      border: "1px solid lightgrey",
      background: '#FFF8DC',
      display: this.props.displayChat,
      overflowY: 'scroll',
    }
  return (
    <div ref={this.myChatWindow}  style={chatStyle}>
    <List scrollBottom={this.scrollBottom}/>
    </div>
  )
}
}
export default ChatWindow;
