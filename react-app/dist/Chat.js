"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require("reactstrap");

var _socket = require("socket.io-client");

var _socket2 = _interopRequireDefault(_socket);

require("./Chat.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chat = function (_React$Component) {
  _inherits(Chat, _React$Component);

  function Chat(props) {
    _classCallCheck(this, Chat);

    var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this, props));

    _this.state = {
      username: '',
      message: '',
      messages: []
    };

    _this.socket = (0, _socket2.default)('localhost:8080');

    _this.sendMessage = function (ev) {
      ev.preventDefault();
      _this.socket.emit('SEND_MESSAGE', {
        author: _this.state.username,
        message: _this.state.message
      });
      _this.setState({
        username: '',
        message: ''
      });
    };

    _this.socket.on('RECEIVE_MESSAGE', function (data) {
      addMessage(data);
    });

    var addMessage = function addMessage(data) {
      console.log(data);
      _this.setState({
        messages: [].concat(_toConsumableArray(_this.state.messages), [data]),
        keyNumber: _this.state.keyNumber + 1
      });
      console.log(_this.state.messages);
    };

    return _this;
  }

  _createClass(Chat, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: 6, md: 4 },
            _react2.default.createElement(
              "div",
              { className: "card" },
              _react2.default.createElement(
                "div",
                { className: "card-body" },
                _react2.default.createElement(
                  "div",
                  { className: "card-title" },
                  "Global Chat"
                ),
                _react2.default.createElement("hr", null),
                _react2.default.createElement(
                  "div",
                  { className: "messages" },
                  this.state.messages.map(function (message) {
                    return _react2.default.createElement(
                      "div",
                      null,
                      message.author,
                      ": ",
                      message.message
                    );
                  })
                )
              ),
              _react2.default.createElement(
                "form",
                { className: "card-footer" },
                _react2.default.createElement(_reactstrap.Input, {
                  type: "text",
                  placeholder: "Username",
                  value: this.state.username,
                  onChange: function onChange(ev) {
                    return _this2.setState({
                      username: ev.target.value
                    });
                  }
                }),
                _react2.default.createElement("br", null),
                _react2.default.createElement(_reactstrap.Input, {
                  type: "text",
                  placeholder: "Message",
                  value: this.state.message,
                  onChange: function onChange(ev) {
                    return _this2.setState({
                      message: ev.target.value
                    });
                  }
                }),
                _react2.default.createElement("br", null),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: "primary", onClick: this.sendMessage },
                  "Send"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Chat;
}(_react2.default.Component);

exports.default = Chat;