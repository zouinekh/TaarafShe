import React from "react";
import "./middle.css";
import { useState,useEffect} from "react";
import Axios from 'axios';
import {FaRegHeart} from 'react-icons/fa';
import profileAnonym from './4b5022936cb6f16579dfd1e5fffb649b.jpg'
import { useNavigate } from "react-router-dom";



function Middle(props) {
  const data=props.user;
  const pub=props.pub;
  console.log(pub)
  const id=data.user_id
  let navigate = useNavigate();

const[LIKES,setLIKES]=useState()
const[post,setPost]=useState([])
const[err,setError]=useState('');

useEffect(()=>{ 

if (pub.length===0){
  console.log(pub.length)
  setError(  <div>
    <div class="alert alert-warning" role="alert"><b>maybe you need to get some friend &#128532; </b></div>
    <div class="alert alert-danger" role="alert"><b>No Post for you &#128517;</b></div>
  </div>)
}else{
  setError('')
}
  },[pub])
const createPost=()=>{
  if (post!='')
  {
  Axios.post('http://localhost:3001/api/get/post',{id,post}).then(res=>{
    console.log(res)
    window.location.reload(false);

  });
  }
}




const fnLike=(nb_l,id)=>{
  Axios.get('http://localhost:3001/api/pub/addLike',{id,nb_l}).then(console.log(' likes inc'));
return;
}

  return (
  <div> 
     <div class="middle">
        <form class="create-post">
          <div class="profile-photo">
           <a href={`http://localhost:3000/profile/${data.user_id}  /${data.user_id}`}> <img src={data.pdp} /></a>
          </div>
          <input
            type="text"
            placeholder={`what's in your mind ,${data.username}` }
            id=" create-post"
            onChange={(e)=>setPost(e.target.value)}
          />
          <div  class="btn btn-priamry" onClick={()=>{createPost()}}>POST</div>
        </form>
        <div class="feeds">
      {err  }
     {
       pub.map((pub)=>{

        return(
          <div key={pub.pub_id}>
    <div>
          <div class="feed"  key={pub.pub_id}>
            <div class="head">
              <div class="user">
                <div class="profile-photo">
                  <img src={profileAnonym} alt="" />
                </div>
                <div class="info">
                  <h4>SomeOne That You May Know</h4>
                  <small>A friend ('this website respect privacy')</small>
                  <small> <b>{pub.date.substr(11,5)} h</b> </small>
                </div>
              </div>
              <span class="edit">
                <i class="uil uil-ellipsis-h"></i>
              </span>
            </div>
            <div class="photo">
              <img src={pub.image} />
            </div>
            <div class="action-buttons">
              <div class="interaction-buttons">
                <span>
                  <i class="uil uil-heart"></i>
                </span>
                <span>
                  <i class="uil uil-comment-dots"></i>
                </span>
              </div>
            </div>
            
            <div class="caption">
              <p>
              {pub.pub_c}
              </p>
            </div>
            <div class="liked-by">
              
              <FaRegHeart onClick={() =>{setLIKES(pub.nb_l++);fnLike(LIKES,pub.user_id)}}/>
        
            
              <p>
                Liked by<b> {pub.nb_l}</b>
              </p>
            </div>
            <div class="comments text-muted">View all <b> {pub.nb_c}</b>  comments</div>
          </div>
        </div>
        </div>)
  })}
        </div>
  
      </div>
</div>);
}

export default Middle;
