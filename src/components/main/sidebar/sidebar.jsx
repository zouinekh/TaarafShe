import React from "react";
import "./sidebar.css";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { RiNotification2Line } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IoColorPalette } from "react-icons/io5";
import { AiOutlineSetting } from "react-icons/ai";
import { useState,useEffect} from "react";
import Theme from "./THEME CUSTOMIZATION/theme";
import { Link } from "react-router-dom";




function Sidebar(props) {
const data=props.user;

  useEffect(()=>{
    const menuItems = document.querySelectorAll('.menu-item');
    const changeActiveItem = () => {
      menuItems.forEach(item => {
          item.classList.remove('active');
      })
  }
  menuItems.forEach(item => {
      item.addEventListener('click',() => {
          changeActiveItem();
          item.classList.add('active');
          if(item.id !== 'notifications'){
              document.querySelector('.notification-popup').
              style.display='none';
          }else{
              document.querySelector('.notification-popup').
              style.display='block';
              document.querySelector('.notification-count')
              .style.display='none';
          }
      })
  })

  });

  return (
    <div>
      <div class="sidebar">
        <a class="menu-item active">
          <i className="sidebar-i ">
            {" "}
            <BsFillHouseDoorFill className="icon" />
          </i>
          <span>
            <h3>Home</h3>
          </span>
        </a>
        <br></br>
        <a class="menu-item" id="notifications">
        
          <i className="sidebar-i" >
            <RiNotification2Line /> <small class="notification-count">9+</small>
          </i>
          <span>
          <h3>Notifications</h3>
        </span>
        </a>
        <div class="notification-popup">
          <div>
            <div class="profile-photo">
              <img src="./assets/profile-2.jpg" />
            </div>
            <div class="notification-body">
              <b>Amine Zouinekh</b> accepted your friend request
              <small class="text-muted">2 DAYS AGO</small>
            </div>
          </div>
          
          <div>
            <div class="profile-photo">
              <img src="./assets/profile-3.jpg" />
            </div>
            <div class="notification-body">
              <b>chaima zouari</b> accepted your friend request
              <small class="text-muted">2 MIN AGO</small>
            </div>
          </div>
          <div>
            <div class="profile-photo">
              <img src="./assets/profile-6.jpg" />
            </div>
            <div class="notification-body">
              <b>zouhaier lbehy</b> accepted your friend request
              <small class="text-muted">10 HOURS AGO</small>
            </div>
          </div>
          <div>
            <div class="profile-photo">
              <img src="./assets/profile-4.jpg" />
            </div>
            <div class="notification-body">
              <b>james rodrigeuse</b> accepted your friend request
              <small class="text-muted">10 HOURS AGO</small>
            </div>
          </div>
        </div>

        <a class="menu-item">
          <i className="sidebar-i">
            {" "}
            <BsFillBookmarkFill />
          </i>
          <span>
            <h3>Articles</h3>
          </span>
        </a>

        <a  href={`/profile/${data.user_id}/${data.user_id}`} class="menu-item" id="theme">
          <i  className="sidebar-i">
            <IoColorPalette />
          </i>
          <span>
          <h3>Profile</h3>
          </span>
        </a>
        <a class="menu-item">
          <i  className="sidebar-i">
            {" "}
            <AiOutlineSetting />
          </i>
          <span>
            <h3>Settings</h3>
          </span>
        </a>
      </div>
      <Theme/>
    </div>
  );
}

export default Sidebar;
