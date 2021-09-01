/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
//import { Menu } from 'antd';
import axios, { useState, useEffect } from 'axios';
//import { USER_SERVER } from '../../../Config';
import { withRouter, Link } from 'react-router-dom';
import { useSelector } from "react-redux";

//const Upload = require('../../../../assets/images/upload.png');

function RightMenu(props) {
  const user = useSelector(state => state.user)


  const logoutHandler = () => {
    axios.get('api/users/logout').then(response => {
      if (response.status === 200) {
        props.history.push("/login");
        localStorage.removeItem('userId');
        localStorage.removeItem('isAdmin');
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
      return (
        <div className = "right-container">
          <ul>
            <li><Link to ="/login">로그인</Link></li>
            <li><Link to ="/register">회원가입</Link></li>
          </ul>
        </div>
      )
  }else{
      return (
        <div className = "right-container">
        <ul>
          <li><a onClick={logoutHandler}>로그아웃</a></li>
        </ul>
      </div>
      )
  }
}

export default withRouter(RightMenu);

