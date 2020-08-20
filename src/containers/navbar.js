import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/authAction";

class Navbar extends Component {
  onLogout() {
    this.props.logout(() => {
      this.props.history.push("/");
    });
  }

  renderNavbar() {
    const { auth } = this.props;

    if (auth.isAuthenticated) {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              exact={true}
              activeClassName="active"
              to="/users/profile"
              className="nav-link"
            >
              <i className="fa fa-user-circle"></i>
              {auth.user}
            </NavLink>
          </li>
          <li className="nav-item">
            <button
              className="nav-link logout-btn"
              onClick={this.onLogout.bind(this)}
            >
              <i className="fa fa-sign-out"></i>Logout
            </button>
          </li>
        </ul>
      );
    } else
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              exact={true}
              activeClassName="active"
              to="/users/login"
              className="nav-link"
            >
              <i className="fa fa-sign-in"></i>Log In
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact={true}
              activeClassName="active"
              to="/users/register"
              className="nav-link"
            >
              <i className="fa fa-user-plus"></i>Register
            </NavLink>
          </li>
        </ul>
      );
  }

  render() {
    return (
      <nav class="navbar navbar-dark bg-dark navbar-expand-lg ">
        <NavLink to="/questions" className="navbar-brand">
          Think And Ask
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                exact={true}
                activeClassName="active"
                to="/questions"
                className="nav-link"
              >
                <i className="fa fa-home"></i>All Questions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact={true}
                activeClassName="active"
                to="/question/create"
                className="nav-link"
              >
                <i className="fa fa-plus-circle"></i>New Question
              </NavLink>
            </li>
          </ul>
          {this.renderNavbar()}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default withRouter(connect(mapStateToProps, { logout })(Navbar));
