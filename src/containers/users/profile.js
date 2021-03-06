import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, Form, reduxForm } from "redux-form";
import firebase from "firebase";
import { getProfile, updateProfile } from "../../actions/authAction";
import { renderInputField } from "../../components/form/forms";
import { showAlert } from "../../components/alert";
import ReactGA from "react-ga";

class Profile extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.getProfile();
        this.props.initialize({ username: this.props.auth.user });
      }
    });
    ReactGA.pageview(this.props.location.pathname);
  }

  onSubmit(values) {
    this.props.updateProfile({ displayName: values.username }, () => {
      showAlert("تم الحفظ بنجاح");
    });
    this.props.history.push("/");
  }

  renderProfile() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="اسم المستخدم"
          name="username"
          placeholder="يرجى ادخل اسم المستخدم"
          type="text"
          component={renderInputField}
        />
        <div className="bottom-button">
          <button type="submit" className="btn btn-primary">
            حفظ
          </button>
        </div>
      </Form>
    );
  }

  render() {
    return <div className="user-form">{this.renderProfile()}</div>;
  }
}
export function validate(values) {
  const errors = {};
  if (!values.username) errors.username = "يرجى ادخل هذا الحقل";
  else if (values.username.length < 2)
    errors.username = "Must be at least 2 characters";
  else if (values.username.length > 20)
    errors.username = "Must be less than 20 characters";

  return errors;
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default reduxForm({
  form: "UserProfileForm",
  validate,
})(connect(mapStateToProps, { getProfile, updateProfile })(Profile));
