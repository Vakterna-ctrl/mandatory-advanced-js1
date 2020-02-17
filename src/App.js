import React from 'react';
import io from 'socket.io-client';
import ChatWindow from './Component/ChatWindow';
import SendChatMessage from './Component/SendChatMessage';
import Login from './Component/Login'
const socket = io('http://3.120.96.16:3000');

const login = /^[-A-Öa-ö-0-9_\s]{1,12}$/;
const chatWindowText = /^.{1,200}$/;
const smile = /\:\)/g;
const laugh = /\:[D]/g;
const ledsen = /\:\(/g;
  var parts = "I am a cow; cows say moo. MOOOOO.".split(/(\bmoo+\b)/gi);
  console.log(parts)
  for (var i = 1; i < parts.length; i += 2) {
    console.log(parts[i])
    parts[i] = <a href="match" key={i}>{parts[i]}</a>;
  }

class App extends React.Component {
  constructor(props){
  super(props)
  this.state ={
    userName: '',
    displayChat: 'none',
    displayLogin: 'block',
    textContent:'Login',
    textAreaContent:'',
    value:'',

  }
  }
  onClick=(e)=>{
    if(login.test(this.state.userName)=== false){
    alert(`användarnamn måste vara mellan 1-12 tecken
  och får bara innehålla bokstäver, siffror,
  -, _ och mellanslag`)

}else{
    if(this.state.displayChat !== 'block'){
    this.setState({
    displayLogin: 'none',
    displayChat: 'block',
    textContent: 'Send Message',
    value:''
  }
    )
  }else if(this.state.displayChat === 'block'){
    if(chatWindowText.test(this.state.textAreaContent) === true){
    socket.emit('message', {
      username: this.state.userName,
      content: this.state.textAreaContent
      .replace(smile, String.fromCodePoint(0x1F600))
      .replace(laugh ,String.fromCodePoint(0x1F604))
      .replace(ledsen, String.fromCodePoint(0x1F625))
    })
    this.setState({textAreaContent:'', value:'',})
  }else if(chatWindowText.test(this.state.textAreaContent) === false){
    alert('meddelandet får bara innehålla mellan 1-200 tecken')
  }


  }
}
  }

onChange =(e)=>{
  this.setState({[e.target.name]: e.target.value, value:e.target.value})
}
  render=()=>{


  return (
    <div className="App" style={{display:'flex', width: '400px', flexDirection:'column'}}>
    <ChatWindow displayChat={this.state.displayChat} />
    <SendChatMessage name="textAreaContent" value={this.state.value} onChange={this.onChange} displayChat={this.state.displayChat} />
    <Login name="userName" onChange={this.onChange} displayLogin={this.state.displayLogin}/>
    <button
    onClick={this.onClick} style={{display:'flex', justifyContent:'center', height:'30px', color:'white', background:'blue'  }}>
    {this.state.textContent}
    </button>
    <p>smileface = :) sadface = :( laugh = :D <a href="https://www.google.se/">$&</a></p>
    <div>{parts}</div>

    </div>

  )
}
}

export default App;
