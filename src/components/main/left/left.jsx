import React, { useEffect,useState } from "react";
import "./left.css";
import Sidebar from "../sidebar/sidebar";

function Left(props) {
  const data=props.user
console.log(data)
  return (
    <div>
      <div class="left">
        <a class="profile">
          <div class="profile-photo">
           <a href={`http://localhost:3000/profile/${data.user_id}/${data.user_id}`}> <img src={data.pdp} /></a>
          </div>
          <div class="handle">
        <h4>{data.username}</h4>
            
            <p class="text-muted">{data.bio}</p>
          </div>
        </a>

        <Sidebar user={data}/>
        <label class="btn btn-primary">Create Post</label>
      </div>
    </div>
  );
}

export default Left;
