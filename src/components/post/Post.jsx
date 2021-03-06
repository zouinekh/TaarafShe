import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useEffect, useState } from "react";
import React from "react";
import Axios from 'axios';
import { useParams } from "react-router-dom"
import './../main/middle/middle.css'
import {FaRegHeart} from 'react-icons/fa';
import './../main/main.css'
import './../acceuille/acceuille.css'
import {FcFullTrash} from 'react-icons/fc';

export default function Post(props) {
  const [isLiked,setIsLiked] = useState(false);
  const [trash,setTrash] = useState("");

  const [publication,setPublication]=useState([]);
  const { idf } = useParams();
  const { id } = useParams();

  const data=props.user;
  useEffect(()=>{ 
    Axios.post('http://localhost:3001/api/get/publication/user',{id:idf}).then((response)=>{
    setPublication(response.data);
})

  if (id=== idf){
    setTrash(  <FcFullTrash className="trashp"/>
    )
  }
  },[])


  const delPost=(id)=>{
    Axios.post('http://localhost:3001/api/del/post',{id}).then(res=>{
      console.log(res)
      console.log('here')
      window.location.reload(false);
  
    });
  
  }
  return (
    <div> 
       <div class="middle">
        
          <div class="feeds">
  
       {
         publication.map((pub)=>{
          
          
          return(
            <div key={pub.pub_id}>
      <div>
            <div class="feed width">
              <div class="head">
                <div class="user">
                  <div class="profile-photo">
                    <img src={data.pdp} alt="" />
                  </div>
                  <div class="info">
                    <h3>{data.username}</h3>
                    <small> <b>{pub.date.substr(11,5)} h</b> </small>
                    <div  onClick={() =>{delPost(pub.pub_id)}}> {trash }</div>
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
                
                <FaRegHeart/>
          
              
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
