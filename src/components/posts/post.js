import React from "react";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Post = (props) => {
  const { post } = props;
  const date = new Date(post.createdAt);
  const formatedDate = date.toJSON();

  return (
    <div className="row">
      <Helmet>
        <meta charSet="utf-8" />
        <title>thinkandask</title>
        <link rel="canonical" href="https://thinkandask.herokuapp.com/" />
        <meta name="description" content="Tutorial for React Helmet fady" />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>
      <div className="post col-sm-10 col-sm-offset-1 animated fadeIn">
        <div className="d-flex w-100 justify-content-between">
          <Link className="post-title" to={`/question/${post.id}`}>
            {post.title}
          </Link>
        </div>
        <div className="post-content">
          <LinesEllipsis
            text={post.content}
            maxLine="2"
            ellipsis="..."
            trimRight
          />
        </div>
        <div className="post-info">
          <i className="fa fa-calendar"></i>
          {formatedDate.slice(0, 10)}
        </div>
      </div>
    </div>
  );
};

export default Post;

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
