import React from "react";
import "./middle.css";
import { useState,useEffect} from "react";
import Axios from 'axios';
import {FaRegHeart} from 'react-icons/fa';
import profileAnonym from './4b5022936cb6f16579dfd1e5fffb649b.jpg'


function Middle(props) {
  const data=props.user;
  const pub=props.pub;
  console.log(pub)
const[profil,setProfile]=useState([])
const[LIKES,setLIKES]=useState()


const fnFriend=async(id)=>{
  let friend;
 await Axios.post('http://localhost:3001/api/get/user',{id}).then(res=>{
 friend= res.data
});
return friend
}

const fnLike=(nb_l,id)=>{
if (nb_l===nb_l++)
  {
  Axios.post('http://localhost:3001/api/pub/addLike',{id,nb_l}).then(console.log(' likes inc'));
  return nb_l++;
  }
return nb_l;
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
          />
          <input type="submit" value="Post" class="btn btn-priamry" />
        </form>
        <div class="feeds">

     {
       pub.map((pub)=>{
         let nb_l=pub.nb_l;

        let friend=fnFriend(pub.user_id);
        console.log(friend)

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
                  <h4>Some One That You May Know</h4>
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
            <div class="liked-by">
              
              <FaRegHeart onClick={() =>{setLIKES(nb_l++)}}/>
        
            
              <p>
                Liked by<b> {pub.nb_l}</b>
              </p>
            </div>
            <div class="caption">
              <p>
              {pub.pub_c}
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
