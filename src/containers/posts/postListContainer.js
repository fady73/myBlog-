import React from "react";
import { connect } from "react-redux";
import { Route, Link, Switch } from "react-router-dom";
import _ from "lodash";
import Post from "../../components/posts/post";
import SearchBar from "../../components/searchBar";
import PostIndex from "./postIndex";
import Pagination from "../../components/pagination";
import { fetchPosts } from "../../actions/postAction";

class PostListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredPosts: [],
      postsToLoad: 10,
      lastIndex: 0,
    };
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  handleSearchBar(searchTerm) {
    const filteredPosts = this.props.posts.filter((post) => {
      return (
        post.title.toLowerCase().match(searchTerm) ||
        (post.content !== undefined
          ? post.content.toLowerCase().match(searchTerm)
          : "")
      );
    });

    this.setState({ filteredPosts: filteredPosts, lastIndex: 0 });
    this.props.history.push("/search");
  }

  handleLoadMore() {
    const lastIndex = this.state.lastIndex + this.state.postsToLoad;
    this.setState({ lastIndex });
  }

  renderFilteredPosts(filteredPosts) {
    const posts = _.slice(
      filteredPosts,
      0,
      this.state.lastIndex + this.state.postsToLoad
    );
    return (
      <div className="post-index">
        <div className="posts">
          {filteredPosts.length === 0 ? (
            <div className="d-flex justify-content-center">
              لا توجد نتائج حاول مره اخرى
            </div>
          ) : (
            ""
          )}
          {_.map(posts, (post, key) => {
            return <Post key={key} post={post} />;
          })}
        </div>

        <div className="load-more text-center">
          {this.state.lastIndex + this.state.postsToLoad <=
            filteredPosts.length && posts.length ? (
            <button
              className="btn btn-secondary text-center load-more-btn"
              onClick={this.handleLoadMore.bind(this)}
            >
              Load More
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }

  render() {
    const posts =
      this.props.location.pathname === "/questions"
        ? this.props.posts
        : this.state.filteredPosts;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(posts.length / this.state.postsPerPage); i++)
      pageNumbers.push(i);

    return (
      <div className="index-wrapper">
        <SearchBar onSubmit={this.handleSearchBar.bind(this)} />
        <Route exact path={`/`} component={PostIndex}></Route>
        <Route path={`/questions`} component={PostIndex}></Route>
        <Route
          path={`/search`}
          render={() => this.renderFilteredPosts(this.state.filteredPosts)}
        ></Route>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.list,
  };
}

export default connect(mapStateToProps, { fetchPosts })(PostListContainer);
