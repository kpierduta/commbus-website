import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';

const ContactForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <div className="control">
          <input
            id="name"
            className="input is-large is-radiusless"
            type="text"
            placeholder="Your name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name && (
            <span className="help is-danger">{errors.name}</span>
          )}
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            id="email"
            name="email"
            className="input is-large is-radiusless"
            type="email"
            placeholder="Your email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && (
            <span className="help is-danger">{errors.email}</span>
          )}
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            id="phone"
            name="phone"
            className="input is-large is-radiusless"
            type="tel"
            placeholder="Your phone number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
          />
          {errors.phone && touched.phone && (
            <span className="help is-danger">{errors.phone}</span>
          )}
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            id="company"
            name="company"
            className="input is-large is-radiusless"
            type="text"
            placeholder="Your company name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.company}
          />
          {errors.company && touched.company && (
            <span className="help is-danger">{errors.company}</span>
          )}
        </div>
      </div>
      <div className="field">
        <div className="control is-large">
          <textarea
            id="message"
            name="message"
            className="textarea is-large is-radiusless"
            placeholder="Enter your Message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />
          {errors.message && touched.message && (
            <span className="help is-danger">{errors.message}</span>
          )}
        </div>
      </div>
      <p className="has-text-white is-size-4">
        In submitting you are agree to our{' '}
        <span className="has-text-white has-text-weight-bold">
          terms and conditions
        </span>
      </p>
      <button type="submit" className="button">
        <span className="is-size-2">Submit</span>
      </button>
    </form>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  }),
  // Custom sync validation
  validationSchema: yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup
      .string()
      .email('Invalid email')
      .required('Email Required'),
    phone: yup.string().required('Phone number is required'),
    company: yup.string().required('Company Name is required'),
    message: yup.string().required('Message field is required'),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    setSubmitting(false);
    props.onSubmit(values);
  },
  displayName: 'ContactForm',
})(ContactForm);
