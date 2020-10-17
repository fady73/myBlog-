import React from "react";
import { Field, Form } from "redux-form";
import PropTypes from "prop-types";
import { renderInputField, renderTextareaField } from "./forms";

const PostForm = (props) => {
  const { onSubmit, formType } = props;
  return (
    <Form onSubmit={onSubmit}>
      <Field
        label="عنوان السؤال"
        name="title"
        type="text"
        placeholder="ادخل هنا سؤالك"
        component={renderInputField}
      />

      <Field
        label="تفاصيل اكتر"
        name="content"
        rows="10"
        placeholder="اشرح اكتر ما هو سؤالك"
        component={renderTextareaField}
      />

      <div className="bottom-button">
        <button type="submit" className="btn btn-primary">
          {formType === "edit" ? "حفظ" : "حفظ"}
        </button>
      </div>
    </Form>
  );
};

export default PostForm;

PostForm.propTyps = {
  onSubmit: PropTypes.func.isRequired,
  formType: PropTypes.oneOf(["edit"]),
};
