import React, {Component} from 'react';
import Search from './Header/Search.jsx';
import Notice from './Header/Notice.jsx';
import SetingsMenu from './Header/Settings_menu.jsx';
import AddSection from './Header/Add_section.jsx';
import './Header.sass';

import styled from 'styled-components';

export default class Header extends Component {
  // componentDidMount(){
  //   this.props.headerHeight(document.querySelector('.headerDiv').offsetHeight);
  // }

  render() {
    return (
      <HeaderWrapper className='headerDiv'>
        <div className='header__top'>
          <a href='/'><div className='logo'>Memory Lane</div></a>


          <Notice />
          <div className='userName'>Иван Иванов</div>
          <div className='userAvatar'/>


          <SetingsMenu/>


        </div>
        <div className='header__bottom'>
          <Search/>
          <AddSection/>
        </div>
      </HeaderWrapper>
    );
  }
}  

const HeaderWrapper = styled.div`
z-index: 5;


.header__bottom {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  height: 70px;
}

.header__top div, 
header__bottom div {
  align-self: center;
  justify-content: space-evenly;
}



.header__top div:nth-child(2) {
  margin-left: auto
}

.header__bottom div:nth-child(2) {
  margin: 0px 0px 0px 30px;
  padding: 0 4px;
  position: fixed;
}

`;
