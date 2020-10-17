import React from "react";
import PropTypes from "prop-types";

const Comment = (props) => {
  const { comment, deleteComment, postid, commentid, auth } = props;
  return (
    <div className="comment">
      <div className="comment-user">
        {comment.user}

        <span>
          {typeof comment.createdAt != "object"
            ? " منذ " + timeSince(comment.createdAt)
            : ""}
        </span>
      </div>
      <p className="comment-body">{comment.message}</p>
      {comment.uid === auth.uid && (
        <button
          className="btn btn-danger"
          onClick={deleteComment.bind(this, postid, comment, commentid)}
        >
          <i className="fa fa-remove"></i>حذف
        </button>
      )}
    </div>
  );
};

export default Comment;

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " سنه" + interval;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " شهر ";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " يوم";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " ساعه ";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + "  دقيقه ";
  }
  return Math.floor(seconds) + " ثانيه ";
}
