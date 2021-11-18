import React from 'react';
import './Chat.css';
import Message from '../Message';

class Chat extends React.Component {

  state = {
    messages: [],
    messageInput: '',
  }

  changeInputMessage = (evt) => {
    this.setState({messageInput: evt.target.value})
  }

  sendMessageOnEnter = (evt) => {
    if (evt.key === 'Enter') {
      this.setState({
        messages: [...this.state.messages, {text: this.state.messageInput}],
        messageInput: ''
      })
    }
  }

  render() {
    return (
      <div className={'chat'}>
        <div className={'message-list'}>
          <div className={'messages'}>
            {this.state.messages.map(message =>
              <Message text={message.text} key={message.text}/>
            )}
          </div>
        </div>
        <input
          value={this.state.messageInput}
          onKeyPress={this.sendMessageOnEnter}
          onChange={this.changeInputMessage}
          className={'input-message'} type="text"
        />
      </div>
    )
  }
}

export default Chat;
