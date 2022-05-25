import "./share.css";
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"
import React from "react";
import { useParams } from "react-router-dom";
import Axios from 'axios';
import { useState,useEffect} from "react";



export default function Share(props) {
  const[data,setdata]=useState([]);

  const {id} = useParams();

  useEffect(()=>{
    Axios.post('http://localhost:3001/api/get/user',{id}).then((response) => {
      setdata(response.data[0]);
      console.log(response)
    })
  },[]);
  return (
    <div className="shareX">
      <div className="shareWrapperX">
        <div className="shareTopX">
          <img className="shareProfileImgX" src={data.pdp} alt="" />
          <input
            placeholder={`what's in your mind ,${data.username}`}
            className="shareInputX"
          />
        </div>
        <hr className="shareHrX"/>
        <div className="shareBottomX">
            <div className="shareOptionsX">
                <div className="shareOptionX">
                    <PermMedia htmlColor="LightCoral" className="shareIconX"/>
                    <span className="shareOptionTextX">Photo or Video</span>
                </div>
                <div className="shareOptionX">
                    <Label htmlColor="lightsalmon" className="shareIconX"/>
                    <span className="shareOptionTextX">Tag</span>
                </div>
                <div className="shareOptionX">
                    <Room htmlColor="RosyBrown" className="shareIconX"/>
                    <span className="shareOptionTextX">Location</span>
                </div>
                <div className="shareOptionX">
                    <EmojiEmotions htmlColor="BurlyWood" className="shareIconX"/>
                    <span className="shareOptionTextX">Feelings</span>
                </div>
            </div>
            <button className="shareButtonX">Share</button>
        </div>
      </div>
    </div>
  );
}
