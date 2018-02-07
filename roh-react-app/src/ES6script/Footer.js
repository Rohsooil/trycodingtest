import React from "react";
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import '../css/footer.css';
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="Logo">
          <img src='' alt='LOGO'/>
        </div>
        <ul>
          <li><a href = "#">가게 소개</a></li>
          <li><a href = "#">위치 안내</a></li>
          <li><a href = "#">예약 안내</a></li>
        </ul>
      </div>
    );
  }
}

export default Footer;