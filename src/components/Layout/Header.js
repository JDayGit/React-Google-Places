import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
      <img src='https://disrupthr.co/wp-content/uploads/2018/04/Zenefits-Lockup2-Red-RGB_lg-1.png' style={logoStyle} alt="zenefits logo"></img>
      </header>
    );
  }
}

const headerStyle = {
  background: '#062F4F',
  height: '10vh',
  width: '100%',
  marginTop: '0vh',
  padding: 0,
}

const logoStyle = {
  width: '200px',
  height: '63px',
  display: 'block',
  marginLeft: '3%',
  paddingTop: '2vh',
}

export default Header;