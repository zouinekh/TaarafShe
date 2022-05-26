import "./profile.css";
import Feed from "../feed/Feed";
import Rightbar from "../post/rightbar/Rightbar";
import React from "react";
import Navbar from '../navbar/navbar'
import { useParams } from "react-router-dom";
import { useState,useEffect} from "react";
import Axios from 'axios';





export default function Profile() {
  const { idf} = useParams();
  const { id} = useParams();
const userid=id;
  const[data,setdata]=useState([]);
  const[Recomand,setRecomand]=useState([]);
  const[friendReq,setfriendReq]=useState([]);
  useEffect(()=>{
    const id=idf;

    Axios.post('http://localhost:3001/api/get/user',{id}).then((response) => {
      setdata(response.data[0]);
      console.log(response)
    })
    Axios.post('http://localhost:3001/api/get/recomnd',{id}).then((response)=>{
      setRecomand(response.data);
      
    })
    Axios.post('http://localhost:3001/api/friends/requestes',{id}).then((response)=>{
      setfriendReq(response.data);
      
  
    })
  },[]);
  
const accepter=()=>{
  if (userid.includes(friendReq) &&(userid!=idf)){
  return(
    <button className=" btn placeprof">Send request</button>

  )}
}
  const invite=()=>{
    if (userid.includes(Recomand)){
    return(
    <button className="btn placeprof"> Accept</button>
    )}
  }
  return (
    <>
        <Navbar user={data}/>
      <div className="profile">
      {/* <Sidebar /> */ }  
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={data.pdc}
                alt=""
              />
              <img
                className="profileUserImg"
                src={data.pdp}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{data.username}</h4>
                <span className="profileInfoDesc">{data.bio}</span>
            </div>
          <div className="makethem">  
            {invite()}
            {accepter()}
            </div>
          </div>
          <div className="profileRightBottom">
            
            <Feed user={data}/>
            <Rightbar  user={data}/>
          
          </div>
        </div>
      </div>
    </>
  );
}
