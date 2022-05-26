import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './article.css';
import{FaChevronRight,FaChevronLeft,FaChevronCircleUp} from "react-icons/fa";
import {AiOutlineUser , AiOutlineCalendar , AiOutlineArrowRight} from "react-icons/ai";
import Navbar from "../navbar/navbar";
import { useParams } from "react-router-dom";
import { useState,useEffect} from "react";
import Axios from 'axios';
import pic1 from './assets/image003_jpg_7659.jpeg';
import pic2 from './assets/images.jpg';
import pic3 from './assets/COVER NOVEMBRE.jpeg';
import pic4 from './assets/930_vogueparis_cover3_182937604.jpeg';
import blog1 from './assets/Blog-post/international-womens-day-750x400.jpg';
import blog2 from './assets/Blog-post/the-awakening-womans-suffrage.jpg';



export default function Article() {



  const { id } = useParams();
  const[data,setdata]=useState([]);
  useEffect(()=>{
    Axios.post('http://localhost:3001/api/get/user',{id}).then((response) => {
      setdata(response.data[0]);
      console.log(response)
    })
  },[]);




  return (
    <div>
      <Navbar user={data} />
      {/* ------------x---------------  Navigation --------------------------x------------------- */}
      {/*--------------------------- Main Site Section ----------------------------*/}
      <main >
        {/*---------------------- Site Title --------------------*/}
        <section className="site-title" id="top">
        <a href="#middell2"><div className="site-background">
            <button className="btn-article">Explore</button>
          </div>
          </a>
        </section>
        {/*----------x----------- Site Title ----------x---------*/}
        {/* --------------------- Blog Carousel ----------------- */}
        <section>
        <div className="blog" id="middel">
          <div className="container-blog">
            <div className="blog-post">
              <OwlCarousel items={3} className="owl-theme" nav margin={8} loop>
                <div className="blog-content">
                  <img src={pic1} className="imageArticle" alt="post-1" />
                  <div className="blog-title">
                    <h3>Découvrez le numéro 1 de Vogue Paris</h3>
                    <button className="btn-article btn-blog">Fashion</button>
                    <span>2 minutes</span>
                  </div>
                </div>
                <div className="blog-content">
                  <img src={pic2} alt="post-1" className="imageArticle" />
                  <div className="blog-title">
                    <h3>London Fashion week's continued the evolution</h3>
                    <button className="btn-article btn-blog">Fashion</button>
                    <span>2 minutes</span>
                  </div>
                </div>
                <div className="blog-content">
                  <img src={pic3} alt="post-1" className="imageArticle" />
                  <div className="blog-title">
                    <h3>Aya Nakamura covers the first issue of Vogue</h3>
                    <button className="btn-article btn-blog">Fashion</button>
                    <span>2 minutes</span>
                  </div>
                </div>
                <div className="blog-content">
                  <img src={pic4} className="imageArticle" alt="post-1" />
                  <div className="blog-title">
                    <h3>Vogue Paris fait peau neuve</h3>
                    <button className="btn-article btn-blog">Fashion</button>
                    <span>2 minutes</span>
                  </div>
                </div>
              
              </OwlCarousel>
              
            </div>

           
          </div>
        </div>
      </section>
        {/* ----------x---------- Blog Carousel --------x-------- */}
        {/* ---------------------- Site Content ------------------------*/}
       <div className="centreshit" id='middell2'>
         <section className="container-blog">
          <div className="site-content-blog">
            <div className="posts">
              <div className="post-content-blog">
                <div className="post-image-blog">
                  <div>
                    <img
                      src={blog1}
                      className="img-blog"
                      alt="blog1"
                    />
                  </div>
                  <div className="post-info-blog flex-row-blog">
                      <AiOutlineUser className="spacing-icons"/>
                      Admin
                       <AiOutlineCalendar className="spacing-icons"/>
                        January 14, 2019
                       <span> 2 Commets</span>
                  </div>
                </div>
                <div className="post-title-blog">
                  <a href="#">
                    Why should boys have all the fun? it's the women who are
                    making india an alcohol-loving contry
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque voluptas deserunt beatae adipisci iusto totam placeat
                    corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                    nobis, voluptate, numquam architecto fugit. Eligendi quidem
                    ipsam ducimus minus magni illum similique veniam tempore
                    unde?
                  </p>
                  <button className="btn-article post-btn-blog">
                    Read More 
                    <AiOutlineArrowRight className="spacing-Arrow"/>
                  </button>
                </div>
              </div>
           
              
              <div className="post-content-blog">
                <div className="post-image-blog">
                  <div>
                    <img
                    src={blog2}
                      className="img-blog"
                      alt="blog1"
                    />
                  </div>
                  <div className="post-info-blog flex-row-blog">
                  
                      <AiOutlineUser className="spacing-icons"/>
                      Admin
                   
             
                       <AiOutlineCalendar className="spacing-icons"/>
                        January 14, 2019
                      <span> 2 Commets</span>
                  </div>
                </div>
                <div className="post-title-blog">
                  <a href="#">
                    New data recording system to better analyse road accidents
                  </a>
                  <p>
                 
                  
                  </p>
                  <button className="btn-article post-btn-blog">
                    Read More 
                    <AiOutlineArrowRight className="spacing-Arrow"/>
                  </button>
                </div>
              </div>
              
              <div className="pagination-blog flex-row-blog">
                <a href="#">
                  <FaChevronLeft/>
                </a>
                <a href="#" className="pages">
                  1
                </a>
                <a href="#" className="pages">
                  2
                </a>
                <a href="#" className="pages">
                  3
                </a>
                <a href="#">
                <FaChevronRight/>
                </a>
              </div>
            </div>
           
          </div>
        </section>
        </div> 
        {/* -----------x---------- Site Content -------------x----------*/}
      </main>
      {/*-------------x------------- Main Site Section ---------------x------------*/}
      {/* --------------------------- Footer ---------------------------------------- */}
      <footer className="footer-blog">
        <div className="container-blog">
          <div className="about-us"  >
            <h2>About us</h2><br/>
            <p>
            we are here to help you to reach ur goal .... ur rights ... 
                    <b>“One people's movement is all of humanity's movement.”</b>
                    we are some <b>developers</b> who belive in humanity 
            </p>
          </div>
        </div>
        <div className="rights flex-row-blog">
          <h6 className="text-gray">
            Copyright ©2022 All rights reserved | made by TaarafShe
          </h6>
        </div>
        <div className="move-up">
          <span>
             <a href="#top"><FaChevronCircleUp/></a>
          </span>
        </div>
      </footer>
    </div>
  );
}
