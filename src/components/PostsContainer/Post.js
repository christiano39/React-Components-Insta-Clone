// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const [likes, setLikes] = useState(props.post.likes)
  const [liked, setLiked] = useState(false)
  const like = (e) => {
    if (!liked){
      setLikes(likes + 1)
      e.target.classList.add('liked')
      setLiked(true)
    }else{
      setLikes(likes - 1)
      e.target.classList.remove('liked')
      setLiked(false)
    }
  }
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection likes={likes} like={like}/>
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;
