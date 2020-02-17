import React from 'react';
import io from 'socket.io-client';


let listStyle = {
  padding: '10px',
  width: '300px',
}
let content = []
const url = /(https:\/\/[^ ]*[^\s])/gi

class List extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      serverMessages: [],

    }
  }
  componentDidMount(){
    const socket = io('http://3.120.96.16:3000');
    socket.on('new_message', (data)=>{
      content = data.content.split(url)
      for (var i = 0; i < content.length; i++) {
        if(url.test(content[i])){
        content[i] = <a href={content[i]} key={i}>{content[i]}</a>;
      }
      }
      data.content = content
      this.setState({serverMessages: [...this.state.serverMessages, data]})
    })

  }
  render(){

    console.log(this.state.serverMessages)

  return(
    <React.Fragment>
    {this.state.serverMessages.map((message,index)=>(
      <p key={index}>{message.username}: {message.content}</p>
    ))
}

  </React.Fragment>

  )
}
}

export default List;
