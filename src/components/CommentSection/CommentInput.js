// You do not need to do anything in this file
import React from 'react';

const CommentInput = props => {
  
  const changeHandler = event => {
    props.changeComment(event.target.value)
  }

  const sumbitHandler = event => {
    props.submitComment()
    event.preventDefault()
  }

  return (
    <form className="comment-form" onSubmit={sumbitHandler}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={changeHandler}
      />
    </form>
  );
};

export default CommentInput;
