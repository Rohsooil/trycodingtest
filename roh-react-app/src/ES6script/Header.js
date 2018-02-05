import React from "react";
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import '../css/header.css';
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  render() {
    return (
      <div className="header">
        <div className="Logo">
          <img src='' alt='LOGO'/>
        </div>
        <ul>
          <li><a href = "/about">가게 소개</a></li>
          <li><a href = "#">위치 안내</a></li>
          <li><a href = "#">예약 안내</a></li>
        </ul>
        <ButtonDropdown className="dropdown" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle color='primary' caret>
            뭐할거냐
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    );
  }
}

export default Header;