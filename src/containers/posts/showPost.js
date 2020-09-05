import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {reduxForm, Field, Form, reset} from 'redux-form';
import _ from 'lodash';
import {fetchPost, addComment,deleteComment} from '../../actions/postAction';
import {renderTextareaField} from '../../components/form/forms';
import PostView from '../../components/posts/postView';
import Comment from '../../components/posts/comment';
import Loader from '../../components/loader';

class ShowPost extends Component {

	componentDidMount() {
		const {id} = this.props.match.params;
		this.props.fetchPost(id);
		window.analytics.track('posts', {
			postId:id,
			userAgent: window.navigator.userAgent,
			appVersion: `${window.navigator.appVersion} `,
			platform:`${window.navigator.platform}`
		  });
	}

	onSubmitComment(values) {
		const comment = {
			user: this.props.auth.user,
			uid: this.props.auth.uid,
			message: values.comment,
		}
		this.props.addComment(comment, this.props.match.params.id);
	}

	renderCommentForm() {
		const {handleSubmit} = this.props;
		// if user is logged in
		if (this.props.auth.isAuthenticated) {

			return (
				<Form onSubmit={handleSubmit(this.onSubmitComment.bind(this))}>
					<Field 
						label="Comment"
						name="comment"
						rows="4"
						placeholder="Write your comment"
						component={renderTextareaField}
					/>
					<div className="bottom-button">
						<button type="submit" className="btn btn-primary">Submit</button>
					</div>
				</Form>
			);
		}
		else 
			return <b>Comments</b>;
	}

	deleteComment(postid,comment,commentid) {
		this.props.deleteComment(postid,comment,commentid,()=>{
			this.props.fetchPost(postid);
		});
	}

	renderComments() {
		const {comments} = this.props.post;
		const{auth}=this.props
		return _.map(comments, (item, key) => {
			return <Comment comment={item} auth={auth} commentid={key}  key={key} postid={this.props.post.id} deleteComment={this.deleteComment.bind(this)}/>;
		});
	}


	renderButtons(post) {
		if (this.props.auth.uid === post.uid)
			return (<div className="form-buttons text-right">
						<Link to={`/question/edit/${post.id}`} className="btn btn-primary"><i className="fa fa-edit"></i>Edit Post</Link>
					</div>);
	}

	render() {
		const {post} = this.props;

		if (!post.isFetched)  
			return <Loader />

		return (
			<div className="post-view">
				<div className="post-view-post">
				{this.renderButtons(post)}
				<PostView post={post} />
				</div>
				<div className="post-view-comment">
					{this.renderCommentForm()}

					<div className="comments">
						{this.renderComments()}
					</div>
				</div>

			</div>
		);	
	}
}


function mapStateToProps(state, ownProps) {
	return {
		post: state.post,
		auth: state.auth
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchPost: (id) => dispatch(fetchPost(id)),
		deleteComment: (postid,comment,commentid,history) => dispatch(deleteComment(postid,comment,commentid,history)),
		addComment: (comment, postId) => dispatch(addComment(comment, postId))
	}
}

function validate(values) {
	const errors = {};
	if (!values.comment)
		errors.comment = 'Required'

	return errors;
}

const afterSubmit = (result, dispatch) => dispatch(reset('CommentForm'));

export default reduxForm({
	form: 'CommentForm',
	validate,
	onSubmitSuccess: afterSubmit
})(connect(mapStateToProps, mapDispatchToProps)(ShowPost));