import React from "react";
import "./navbar.css";
import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";

import { BiSearchAlt } from "react-icons/bi";
function Navbar(props) {
  const data=props.user
console.log(data)
 const { id } = useParams();

  return (
    <div>
      
      <nav>
        <div className="container">
         <a className="a" href={`/home/${id}`}> <h2 className="log" >TaarafShe</h2></a>
          <div className="search-bar">
            <i>
              <BiSearchAlt />
            </i>
            <input type="search" placeholder="Search for friends" />
          </div>
          <div className="create">
            <label className="btn btn-primary">Create</label>
            <div className="profile-photo">
              <img src={data.pdp}  className='image'/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
