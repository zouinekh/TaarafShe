import React from "react";
import { useState,useEffect} from "react";
import Axios from 'axios';
import "./rightbar.css";
import { useParams } from "react-router-dom";



export default function  Rightbar(props) {
  const data=props.user
  const { idf } = useParams();
  const id=idf;
    const[friends,setfriends]=useState([]);
console.log(id)
  useEffect(()=>{ 
    Axios.post('http://localhost:3001/api/friends',{id}).then((response)=>{
    setfriends(response.data);
})
  },[id])

  console.log(friends)

  function clickEditProfile() {
    {/*redirection lil page pour modifier*/}
}

  const ProfileRightbar = () => {
    return (
      
      <>
      <h4 className="rightbarTitle">friends</h4>
      <div className="rightbarFollowings">
      {
        friends.map((f)=>{
          return(
            <div key={f.user_id}>
      
           <div className="rightbarFollowing">
           <a href={`http://localhost:3000/profile/${data.user_id}/${f.user_id}`}> <img
              src={f.pdp}
              alt=""
              className="rightbarFollowingImg"
            /></a>
            <span className="rightbarFollowingName">{f.username}</span>
          </div>
        </div>
      )})}        </div>

      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar />
      </div>
    </div>
  );
}
