import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createPost } from "../../actions/postAction";
import { validatePostForm as validate } from "../../components/form/forms";
import { showAlert } from "../../components/alert";
import PostForm from "../../components/form/postForm";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const toastConfigObject = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
};

toast.configure(toastConfigObject);

class NewPost extends Component {
  onSubmit(values) {
    const post = {
      ...values,
      uid: this.props.auth.uid,
      user: this.props.auth.user,
    };
    if (this.props.auth.uid !== null) {
      this.props.createPost(post, () => {
        this.props.history.push("/");
        showAlert("The post has been successfully created");
      });
    } else {
      toast.error("Please go to register or sign in", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="post-form">
        <PostForm
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
          formType="create"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  createPost: (post, callback) => {
    dispatch(createPost(post, callback));
  },
});

export default reduxForm({
  form: "NewPostForm",
  validate,
})(connect(mapStateToProps, mapDispatchToProps)(NewPost));
