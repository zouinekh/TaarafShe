import React from "react";
import Navbar from "../navbar/navbar";
import "./acceuille.css";
import Main from "../main/main";
import { useParams } from "react-router-dom";
import { useState,useEffect} from "react";
import Axios from 'axios';



function Acceuille() {
  const { id } = useParams();
  const[data,setdata]=useState([]);
console.log(id)
  useEffect(()=>{
    Axios.post('http://localhost:3001/api/get/user',{id}).then((response) => {
      setdata(response.data[0]);
      console.log(response)
    })
  },[]);

  return (
    <div>
      <Navbar user={data} />
      <Main user={data} />
    </div>
  );
}

export default Acceuille;
