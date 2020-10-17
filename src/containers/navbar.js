import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/authAction";
import ReactGA from "react-ga";

class Navbar extends Component {
  onLogout() {
    this.props.logout(() => {
      this.props.history.push("/");
    });
  }

  renderNavbar() {
    const { auth, history } = this.props;
    ReactGA.pageview(this.props.location.pathname);
    this.props.history.listen((location) => {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    });
    if (auth.isAuthenticated) {
      return (
        <Fragment>
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
              <i className="fa fa-sign-out"></i>تسجيل خروج
            </button>
          </li>
        </Fragment>
      );
    } else
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink
              exact={true}
              activeClassName="active"
              to="/users/login"
              className="nav-link"
            >
              <i className="fa fa-sign-in"></i>تسجيل دخول
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact={true}
              activeClassName="active"
              to="/users/register"
              className="nav-link"
            >
              <i className="fa fa-user-plus"></i>تسجيل مستخدم جديد
            </NavLink>
          </li>
        </Fragment>
      );
  }

  render() {
    return (
      <nav class="navbar navbar-dark bg-dark navbar-expand-lg ">
        <NavLink to="/questions" className="navbar-brand">
          Think And Ask - فكر واسال
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            window.analytics.track("clickOnNav", {
              // postId:id,
              userAgent: window.navigator.userAgent,
              appVersion: `${window.navigator.appVersion} `,
              platform: `${window.navigator.platform}`,
              click: "true",
            });
          }}
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
                <i className="fa fa-home"></i>كل الاسئله
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact={true}
                activeClassName="active"
                to="/question/create"
                className="nav-link"
              >
                <i className="fa fa-plus-circle"></i>سؤال جديد
              </NavLink>
            </li>
            {this.renderNavbar()}
          </ul>
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
