import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback
} from "reactstrap";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (error && touched) {
      return <FormFeedback>hmm ... unaccepted</FormFeedback>;
    } else {
      return <FormFeedback valid>Accepted</FormFeedback>;
    }
  }
  renderInput = formProps => {
    let vali = false;
    let invali = false;
    if (formProps.meta.touched) {
      if (formProps.meta.error) {
        invali = true;
      } else {
        vali = true;
      }
    }
    return (
      <FormGroup>
        <Label for={formProps.input.name}>{formProps.label}</Label>
        <Input
          valid={vali}
          invalid={invali}
          id={formProps.input.name}
          {...formProps.input}
        />
        {this.renderError(formProps.meta)}
      </FormGroup>
    );
  };
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="title"
          component={this.renderInput}
          label="Enter a title"
        ></Field>
        <Field
          name="description"
          component={this.renderInput}
          label="Enter a description"
        ></Field>
        <Button color="info">Submit</Button>
      </Form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);
