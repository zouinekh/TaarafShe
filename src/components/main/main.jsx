import React from "react";
import Left from "./left/left";
import "./main.css";
import Middle from "./middle/middle";
import Right from "./right/right";
import { useState,useEffect} from "react";
import Axios from 'axios';


function Main(props) {


 const data=props.user;
 const id=data.user_id;
 const[info,setInfo]=useState([]);



  useEffect(()=>{ 
  Axios.post('http://localhost:3001/api/get/publication/friends',{id}).then((response)=>{
    setInfo(response.data);
})
  },[id])
console.log(id)

  return (
    
    <div>
      <main>
        <div class="container">
          <Left user={data}/>
          <Middle user={data} pub={info} />
          <Right user={data}/>
        </div>
      </main>
    </div>
  );
}

export default Main;
