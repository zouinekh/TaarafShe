import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './article.css';
import{FaChevronRight,FaChevronLeft,FaChevronCircleUp} from "react-icons/fa";
import {AiOutlineUser , AiOutlineCalendar , AiOutlineArrowRight} from "react-icons/ai";
import Navbar from "../navbar/navbar";


export default function Article() {
  return (
    <div>
      {/* ------------x---------------  Navigation --------------------------x------------------- */}
      {/*--------------------------- Main Site Section ----------------------------*/}
      <main>
        {/*---------------------- Site Title --------------------*/}
        <section className="site-title">
          <div className="site-background">
            <button className="btn-article">Explore</button>
          </div>
        </section>
        {/*----------x----------- Site Title ----------x---------*/}
        {/* --------------------- Blog Carousel ----------------- */}
        <section>
        <div className="blog">
          <div className="container-blog">
            <div className="blog-post">
              <OwlCarousel items={3} className="owl-theme" nav margin={8} loop>
                <div className="blog-content">
                  <img src="./assetsBlog/Blog-post/post-1.jpg" alt="post-1" />
                  <div className="blog-title">
                    <h3>London Fashion week's continued the evolution</h3>
                    <button className="btn-article btn-blog">Fashion</button>
                    <span>2 minutes</span>
                  </div>
                </div>
                <div className="blog-content">
                  <img src="./assetsBlog/Blog-post/post-3.jpg" alt="post-1" />
                  <div className="blog-title">
                    <h3>London Fashion week's continued the evolution</h3>
                    <button className="btn-article btn-blog">Fashion</button>
                    <span>2 minutes</span>
                  </div>
                </div>
                <div className="blog-content">
                  <img src="./assetsBlog/Blog-post/post-2.jpg" alt="post-1" />
                  <div className="blog-title">
                    <h3>London Fashion week's continued the evolution</h3>
                    <button className="btn-article btn-blog">Fashion</button>
                    <span>2 minutes</span>
                  </div>
                </div>
                <div className="blog-content">
                  <img src="./assetsBlog/Blog-post/post-5.png" alt="post-1" />
                  <div className="blog-title">
                    <h3>London Fashion week's continued the evolution</h3>
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
        <section className="container-blog">
          <div className="site-content-blog">
            <div className="posts">
              <div className="post-content-blog">
                <div className="post-image-blog">
                  <div>
                    <img
                      src="./assetsBlog/Blog-post/blog1.png"
                      className="img-blog"
                      alt="blog1"
                    />
                  </div>
                  <div className="post-info-blog flex-row-blog">
                      <span>
                      <AiOutlineUser className="spacing-icons"/>
                      Admin
                      </span>
                      <span>
                       <AiOutlineCalendar className="spacing-icons"/>
                        January 14, 2019
                      </span>
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
              <hr />
              <div className="post-content-blog">
                <div className="post-image-blog">
                  <div>
                    <img
                      src="./assetsBlog/Blog-post/blog2.png"
                      className="img-blog"
                      alt="blog1"
                    />
                  </div>
                  <div className="post-info-blog flex-row-blog">
                      <span>
                      <AiOutlineUser className="spacing-icons"/>
                      Admin
                      </span>
                      <span>
                       <AiOutlineCalendar className="spacing-icons"/>
                        January 14, 2019
                      </span>
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
              <hr />
              <div className="post-content-blog">
                <div className="post-image-blog">
                  <div>
                    <img
                      src="./assetsBlog/Blog-post/blog3.png"
                      className="img-blog"
                      alt="blog1"
                    />
                  </div>
                  <div className="post-info-blog flex-row-blog">
                      <span>
                      <AiOutlineUser className="spacing-icons"/>
                      Admin
                      </span>
                      <span>
                       <AiOutlineCalendar className="spacing-icons"/>
                        January 14, 2019
                      </span>
                       <span> 2 Commets</span>
                  </div>
                </div>
                <div className="post-title-blog">
                  <a href="#">
                    New data recording system to better analyse road accidents
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
              <hr />
              <div className="post-content-blog">
                <div className="post-image-blog">
                  <div>
                    <img
                      src="./assetsBlog/Blog-post/blog4.png"
                      className="img-blog"
                      alt="blog1"
                    />
                  </div>
                  <div className="post-info-blog flex-row-blog">
                      <span>
                      <AiOutlineUser className="spacing-icons"/>
                      Admin
                      </span>
                      <span>
                       <AiOutlineCalendar className="spacing-icons"/>
                        January 14, 2019
                      </span>
                       <span> 2 Commets</span>
                  </div>
                </div>
                <div className="post-title-blog">
                  <a href="#">
                    New data recording system to better analyse road accidents
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
            <aside className="sidebar-blog">
              <div className="category-blog">
                <h2>Category</h2>
                <ul className="category-list-blog">
                  <li className="list-items-blog">
                    <a href="#">Software</a>
                    <span>(05)</span>
                  </li>
                  <li className="list-items-blog">
                    <a href="#">Techonlogy</a>
                    <span>(02)</span>
                  </li>
                  <li className="list-items-blog">
                    <a href="#">Lifestyle</a>
                    <span>(07)</span>
                  </li>
                  <li className="list-items-blog">
                    <a href="#">Shopping</a>
                    <span>(01)</span>
                  </li>
                  <li className="list-items-blog">
                    <a href="#">Food</a>
                    <span>(08)</span>
                  </li>
                </ul>
              </div>
              <div className="popular-post-blog">
                <h2>Popular Post</h2>
                <div className="post-content-blog">
                  <div className="post-image-blog">
                    <div>
                      <img
                        src="assetsBlog/popular-post/m-blog-1.jpg"
                        className="img-blog"
                        alt="blog1"
                      />
                    </div>
                    <div className="post-info-blog flex-row-blog">
                      <span>
                      <AiOutlineCalendar className="spacing-icons"/>
                      January 14, 2019
                      </span>
                      <span>2 Commets</span>
                    </div>
                  </div>
                  <div className="post-title-blog">
                    <a href="#">
                      New data recording system to better analyse road accidents
                    </a>
                  </div>
                </div>
                <div className="post-content-blog">
                  <div className="post-image-blog">
                    <div>
                      <img
                        src="./assetsBlog/popular-post/m-blog-2.jpg"
                        className="img-blog"
                        alt="blog1"
                      />
                    </div>
                    <div className="post-info-blog flex-row-blog">
                      <span>
                      <AiOutlineCalendar className="spacing-icons"/>
                      January 14, 2019
                      </span>
                      <span>2 Commets</span>
                    </div>
                  </div>
                  <div className="post-title-blog">
                    <a href="#">
                      New data recording system to better analyse road accidents
                    </a>
                  </div>
                </div>
                <div className="post-content-blog">
                  <div className="post-image-blog">
                    <div>
                      <img
                        src="./assetsBlog/popular-post/m-blog-3.jpg"
                        className="img-blog"
                        alt="blog1"
                      />
                    </div>
                    <div className="post-info-blog flex-row-blog">
                      <span>
                      <AiOutlineCalendar className="spacing-icons"/>
                      January 14, 2019
                      </span>
                      <span>2 Commets</span>
                    </div>
                  </div>
                  <div className="post-title-blog">
                    <a href="#">
                      New data recording system to better analyse road accidents
                    </a>
                  </div>
                </div>
                <div className="post-content-blog">
                  <div className="post-image-blog">
                    <div>
                      <img
                        src="./assetsBlog/popular-post/m-blog-4.jpg"
                        className="img-blog"
                        alt="blog1"
                      />
                    </div>
                    <div className="post-info-blog flex-row-blog">
                      <span>
                      <AiOutlineCalendar className="spacing-icons"/>
                      January 14, 2019
                      </span>
                      <span>2 Commets</span>
                    </div>
                  </div>
                  <div className="post-title-blog">
                    <a href="#">
                      New data recording system to better analyse road accidents
                    </a>
                  </div>
                </div>
                <div className="post-content-blog">
                  <div className="post-image-blog">
                    <div>
                      <img
                        src="./assetsBlog/popular-post/m-blog-5.jpg"
                        className="img-blog"
                        alt="blog1"
                      />
                    </div>
                    <div className="post-info-blog flex-row-blog">
                      <span>
                      <AiOutlineCalendar className="spacing-icons"/>
                      January 14, 2019
                      </span>
                      <span>2 Commets</span>
                    </div>
                  </div>
                  <div className="post-title-blog">
                    <a href="#">
                      New data recording system to better analyse road accidents
                    </a>
                  </div>
                </div>
              </div>
              <div className="popular-tags-blog">
                <h2>Popular Tags</h2>
                <div className="tags-blog flex-row-blog">
                  <span className="tag-blog"  >
                    Software
                  </span>
                  <span className="tag-blog"  >
                    technology
                  </span>
                  <span className="tag-blog"  >
                    travel
                  </span>
                  <span className="tag-blog"  >
                    illustration
                  </span>
                  <span className="tag-blog"  >
                    design
                  </span>
                  <span className="tag-blog"  >
                    lifestyle
                  </span>
                  <span className="tag-blog"  >
                    love
                  </span>
                  <span className="tag-blog"  >
                    project
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </section>
        {/* -----------x---------- Site Content -------------x----------*/}
      </main>
      {/*-------------x------------- Main Site Section ---------------x------------*/}
      {/* --------------------------- Footer ---------------------------------------- */}
      <footer className="footer-blog">
        <div className="container-blog">
          <div className="about-us"  >
            <h2>About us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium quia atque nemo ad modi officiis iure, autem nulla
              tenetur repellendus.
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
             <FaChevronCircleUp/>
          </span>
        </div>
      </footer>
    </div>
  );
}
