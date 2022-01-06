import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import './style.css'
const initialValues = {
  username: "",
  password: ""
};

const validate = (values) => {
  let errors = {};


  if (!values.username) {
    errors.username = "kullanıcı adı giriniz!";
  }

  if (!values.password) {
    errors.password = "şifrenizi giriniz!";
  } else if (values.password.length < 4) {
    errors.password = "girdiğiniz şifre kısa";
  }

  return errors;
};

const submitForm = (values) => {
  console.log(values);
};

const Login = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,

        } = formik;
        return (
          <div className="container text-center">
            <div>
            <h1><img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="display image" /></h1>
            <form onSubmit={handleSubmit}>
              <div className="d-flex justify-content-center mb-3">

                <input
                  type="username"
                  name="username"
                  id="username"
                  placeholder="Kullanıcı adı"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.username && touched.username ? "input-error" : null
                  }
                />
                {errors.username && touched.username && (
                  <span className="error">{errors.username}</span>
                )}
              </div>

              <div className="d-flex justify-content-center mb-3">

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="··············"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? "input-error" : null
                  }
                />
                {errors.password && touched.password && (
                  <span className="error">{errors.password}</span>
                )}
              </div>
              <div className="login btn btn-lg">
                <Link to='/post' style={{ textDecoration: 'none', color:"white"}}>Giriş</Link>
              </div>

              <div>
                <a className="login-form-forgot" href="" style={{ textAlign: 'center' }}>
                  Şifremi unuttum
                </a>
                {console.log('Bağlantıya tıklandı.')}
              </div>
            </form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;