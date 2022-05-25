import React from "react";
import logo from "./undraw_Exciting_news_re_y1iw-removebg-preview.png";
import reg from "./undraw_super_woman_dv0y (1).png";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useState,useEffect} from "react";

function Login() {
  const [Mode, setMode] = useState("containerx");
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const[age,setage]=useState("");
  const[add,setadd]=useState("");
  const[mdp,setmdp]=useState("");
  const[data,setdata]=useState('');
  let navigate = useNavigate();

useEffect(()=>{
  Axios.get('http://localhost:3001/api/get').then((response)=>{
    setdata(response.data)
  });
},[]); 
const nav=()=>{
  let b=false;
  data.map((val)=>{
    if (val.username===add|| val.psd===mdp){
      navigate(`../home/${val.user_id}`);
      b= true;
    }
  })
  return b;
}
 const LogIn=()=>{
   console.log(add)
        if (nav()){
          nav(add);
        }
        else
          alert('wrong password or username');
      console.log(data)
        }    
    
  const SignUp=()=>{
    
    if(isNaN(age)||UserName===''|| !Email.includes('@') || Email==='' || Password===''|| Password.length<10||data.includes(UserName)||age===null||UserName===null|| Email===null || Password===null){
      alert('wrong info !!! pls check again');
      console.log('error');
    }
    else{
    Axios.post("http://localhost:3001/api/insert",{UserName,password:Password,Email,age}).then(() => {
      console.log('here')
    })
    setMode("containerx sign-in-mode");}
  };
  return (
    <div>
      {" "}
      <div className={Mode}>
        <div className="forms-containerx">
          <div className="signin-signup">
            <form action="/#" className="sign-in-form form">
              <h2 className="titlex">Sign in</h2>
              <div className="input-fieldx">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" onChange={(e)=> setadd(e.target.value)}/>
              </div>
              <div className="input-fieldx">
                  <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password"  onChange={(e)=> setmdp(e.target.value)}/>
              </div>
            
              <a onClick={()=>LogIn()}  value="Login" className="btns login" ><span className="span"> Login</span></a>
            </form>
            <form action="/#" className="sign-up-form form">
              <h2 className="titlex">Sign up</h2>
              <div className="input-fieldx">
                <i className="fas fa-user "></i>
                <input type="text" placeholder="Username" onChange={(e)=> setUserName(e.target.value)} />
    
              </div>
              <div className="input-fieldx">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
              </div>
              <div className="input-fieldx">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password"  onChange={(e)=> setPassword(e.target.value)} />
              </div>
              <div className="input-fieldx">
                <i className="fas fa-lock"></i>
                <input type="text" placeholder="Age" onChange={(e)=> setage(e.target.value)} />
              </div>
              <input type="submit" onClick={()=>{  SignUp()}} className="btns" value="Sign up" />
              
            </form>
          </div>
        </div>

        <div className="panels-containerx">
          <div className="panel left-panel">
            <div className="content">
              <h3>Welcome !</h3>
              <p>
                If you didn't <strong className="word">SIGN UP</strong> yet.
                <br />
                dont think twice to be part of our Community
              </p>
              <button
                onClick={() => setMode("containerx sign-up-mode")}
                className="btns transparent"
                id="sign-up-btns"
              >
                Sign up
              </button>
            </div>
            <img src={logo} className="imagex" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                if you are already <strong className="word">one of us </strong>,
                and <strong className="word">signed up </strong>now you can go
                freely share your experience and be{" "}
                <strong className="word">active </strong>in our Community
              </p>
              <button
                onClick={() => setMode("containerx sign-in-mode")}
                className="btns transparent"
                id="sign-in-btns"
              >
                Sign in
              </button>
            </div>
            <img src={reg} className="imagex" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
