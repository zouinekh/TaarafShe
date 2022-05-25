import React from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

export default function Feed(props) {
  const data=props.user;

  return (
    <div className="feedX">
      <div className="feedWrapperX">
      <Share user={data}/>
          <Post user={data} />

      </div>
    </div>
  );
}
