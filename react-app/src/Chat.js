import React from "react";
import { Col, Button, Input } from "reactstrap";
import io from "socket.io-client";
import './Chat.css';
class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      message: '',
      messages: [],
    };

    this.socket = io('localhost:8080');

    this.sendMessage = ev => {
      ev.preventDefault();
      this.socket.emit('SEND_MESSAGE', {
        author: this.state.username,
        message: this.state.message
      });
      this.setState({
        username : '',
        message: ''
      });
    }

    this.socket.on('RECEIVE_MESSAGE', function(data){
      addMessage(data);
    });

    const addMessage = data => {
      console.log(data);
      this.setState({
        messages: [...this.state.messages, data],
        keyNumber: this.state.keyNumber + 1
      });
      console.log(this.state.messages);
    }

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Col xs={6} md={4}>
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  Global Chat
                </div>
                <hr />
                <div className="messages">
                  {this.state.messages.map(message => {
                    return (
                      <div>
                        {message.author}: {message.message}
                      </div>
                    )
                  })}
                </div>
              </div>
              <form className="card-footer">
                <Input
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={
                    ev => this.setState({
                      username: ev.target.value
                    })
                  }
                />
                <br />
                <Input
                  type="text"
                  placeholder="Message"
                  value={this.state.message}
                  onChange={
                    ev => this.setState({
                      message: ev.target.value
                    })
                  }
                />
                <br />
                <Button color="primary" onClick={this.sendMessage}>Send</Button>
              </form>
            </div>
          </Col>
        </div>
      </div>
    );
  }
}

export default Chat;