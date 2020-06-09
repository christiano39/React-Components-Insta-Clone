// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments)
  const [currentComment, setCurrentComment] = useState('')
  const addComment = () => {
    setComments([...comments, {
      username: 'christiano39',
      text: currentComment
    }])
  }
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map((comment, i) => <Comment comment={comment} key={i}/>)}
      <CommentInput changeComment={setCurrentComment} submitComment={addComment}/>
    </div>
  );
};

export default CommentSection;
