// import './Header.css';
// import React from 'react';
// import {Link} from 'react-router-dom';
// import LanguageDropdown from './LanguageDropdown';
//
// const Header = ({onLanguageChange}) => (
//   <header>
//     <nav>
//       <ul>
//         <li>
//           <Link to="/Home">Home</Link>
//         </li>
//         <li>
//           <Link to="/Cats">Cats</Link>
//         </li>
//         <li>
//           <Link to="/Help">Help</Link>
//         </li>
//       </ul>
//     </nav>
//     <LanguageDropdown onLanguageChange={onLanguageChange} />
//   </header>
// );
//
// export default Header;

import './Header.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Input, Menu, Segment} from "semantic-ui-react";
import LanguageDropdown from './LanguageDropdown';

export default class Header extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.reporterWindowSize);
  }
  componentWillUnmount(){
    window.removeEventListener("resize", this.reporterWindowSize);
  }
  state = {activeItem: "home"};

  handleItemClick = (e, {name}) => this.setState({activeItem: name});

  render() {
    const {activeItem} = this.state;

    return(

      <Segment inverted>
      <Menu inverted secondary>
       <Menu.Item
         as={Link}
         to="/"
         name="home"
         active={activeItem === "home"}
         onClick={this.handleItemClick}
       />

       <Menu.Item
         as={Link}
         to="/Cats"
         name= "Cats"
         onClick={this.handleItemClick}
       />

       <Menu.Item
       as={Link}
       to="/help"
       name= "help"
       onClick={this.handleItemClick}
       />

       <Menu.Menu position="right">
        <Menu.Item>
          <LanguageDropdown
            onLanguageChange={this.props.onLanguageChange}
      />
       </Menu.Item>
      </Menu.Menu>
     </Menu>
     </Segment>
  );
 }
}
