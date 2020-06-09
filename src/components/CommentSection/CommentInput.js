// You do not need to do anything in this file
import React from 'react';

const CommentInput = props => {
  const changeHandler = event => {
    props.changeComment(event.target.value)
  }

  return (
    <form className="comment-form" onSubmit={props.submitComment}>
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
