import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './settings.css';
import Axios from 'axios';
import Navbar from '../navbar/navbar';
import { BsUpload } from "react-icons/bs";


function Settings() {
    const {id}=useParams();
    const [data,setData]=useState([]);
    const [userName,setuserName]=useState('');
    const [Email,setEmail]=useState('');
    const [NPassword,setNPassword]=useState('');
    const [Password,setPassword]=useState('');
    const [CNPassword,setCNPassword]=useState('');
    const [img,setimg]=useState('');

    useEffect(()=>{
        Axios.post('http://localhost:3001/api/get/user',{id}).then((response) => {
        setData(response.data[0]);
      console.log(response)
    })

    },[])
    const updateUser=()=>{
        console.log(img)
        console.log(userName);

        if(Password===data.psd&&NPassword===CNPassword){
            Axios.get('http://localhost:3001/api/Update/user',{id,userName,Email,NPassword,img}).then((response)=>{
                console.log('done')
            })
        }
    }
  return (
    <div>
<Navbar user={data}/>

<div class="wrapper bg-white mt-sm-5">
    <h3 class="h3"><b>Account settings</b></h3>
    <hr></hr>

        <img src={data.pdp}
            class="img" alt=""/>
        <div class=" pfSetting" id="">
            <b>Profile Photo</b>
            <p className='p'>Accepted file type "png" Less than 1MB</p>
            <input type="file" name="file" id="file" class="inputfile" accept="image/png, image/gif, image/jpeg" onChange={(e)=> setimg(e.target.value)}/>
            <label className='' for="file"><b>Choose a file </b><BsUpload/></label>
  <span class="file-custom"></span>
        </div>

    <div class="py-2">
        <div class="row py-2">
            <div class="col-md-6">
                <label for="firstname">Your Name</label>
                <input type="text" class="bg-light form-control input" placeholder={data.username} onChange={(e)=>setuserName(e.target.value)}/>
            </div>
            
        </div>
        <div class="row py-2">
            <div class="col-md-6">
                <label for="email">Email Address</label>
                <input type="text" class="bg-light form-control input" placeholder={data.mail} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div class="col-md-6 pt-md-0 pt-3">
                <label for="phone">Current password</label>
                <input type="password" class="bg-light form-control input" placeholder="Your  Password" onChange={(e)=> setPassword(e.target.value)}/>
            </div>
           
            <div class="col-md-6 pt-md-0 pt-3">
                <label for="phone">New password</label>
                <input type="password" class="bg-light form-control input" placeholder="Entre New Password" onChange={(e)=> setNPassword(e.target.value)}/>
            </div>
            <div class="col-md-6 pt-md-0 pt-3">
                <label for="phone">Confirme  password</label>
                <input type="password" class="bg-light form-control input" placeholder="Entre The New Password" onChange={(e)=> setCNPassword(e.target.value)}/>
            </div>
        </div>
           
        <div class="blockbtn">
            <button class="btn btn-primaryS mr-3" onClick={()=>{updateUser()}}>Save Changes</button>
            <button class="btn danger">Cancel</button>
        </div>
        <div class="d-sm-flex align-items-center pt-3" id="deactivate">
            <div className='place'>
                <b>Deactivate your account</b>
                <p>Details about your company account and password</p>
            </div>
            <div class="ml-auto">
                <button class="btn danger placeb">Deactivate</button>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Settings