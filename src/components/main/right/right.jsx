import React from "react";
import "./right.css";
import profile from "../../../assets/profile-9.jpg";
import profile1 from "../../../assets/profile-4.jpg";
import profile2 from "../../../assets/profile-18.jpg";
import Axios from 'axios';
import { useState,useEffect} from "react";

function Right(props) {
  const data=props.user
  const id=data.user_id;
  const[info,setinfo]=useState([]);
  const[friendReq,setfriendReq]=useState([]);

  useEffect(()=>{
    Axios.post('http://localhost:3001/api/get/recomnd',{id}).then((response)=>{
    setinfo(response.data);
    
  })
  Axios.post('http://localhost:3001/api/friends/requestes',{id}).then((response)=>{
    setfriendReq(response.data);
    

  })
  },[id]);
  const fnInvite=(idf)=>{
    console.log(idf)
    Axios.post('http://localhost:3001/api/insert/follow',{id,idf}).then(() => {
      console.log('done',idf)
    })
  Axios.post('http://localhost:3001/api/get/recomnd',{id}).then((response)=>{
    setinfo(response.data);
    
  })
  }
const fnAccept=(idf)=>{
  Axios.post('http://localhost:3001/api/friends/accepte',{id,idf}).then(() => {
      console.log('done')
    })
  Axios.post('http://localhost:3001/api/friends/requestes',{id}).then((response)=>{
      setfriendReq(response.data);
      
  
    })
}
  const ShowUsers=()=>{
    return(
      <div class="friend-requests">
    <h4> Recomndation </h4>
    <div>{info.map((userRec)=>{
      return(
    <div class="request"key={userRec.user_id}>
      <div >
      <div class="info">
        <div class="profile-photo">
       <a href={`http://localhost:3000/profile/${id}/${userRec.user_id}`}>   <img src={userRec.pdp} /></a>
        </div>
        <div>
          <h5>{userRec.username}</h5>
          <p class="text-muted"></p>
        </div>
      </div>
      
      <div class="action">
        <button class="btn btn-primary" onClick={() =>fnInvite(userRec.user_id)}>Invite</button>
        <button class="btn">Delete</button>
      </div>
      </div> 
       </div>

) })}
</div>
</div>
)
}

const ShowReq=()=>{
  return(
  <div class="friend-requests">
  <h4> Requests </h4>
  {friendReq.map((friend)=>{
    return(
  <div class="request" key={friend.user_id}>
    <div class="info">
      <div class="profile-photo">
     <a href={`http://localhost:3000/profile/${friend.user_id}`}>   <img src={friend.pdp} /></a>
      </div>
      <div>
        <h5>{friend.username}</h5>
        <p class="text-muted">8 mutual friends</p>
      </div>
    </div>
    <div class="action">
      <button class="btn btn-primary" onClick={()=>fnAccept(friend.user_id)}>Accept</button>
      <button class="btn">Decline</button>
    </div>
  
  </div>)
  })}
</div>
)
}
  return (
      <div class="right">
       <ShowReq/>
        <ShowUsers/>
    </div>
  );
  }

export default Right;
