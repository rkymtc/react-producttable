import * as yup from "yup";


const SignupSchema = yup.object().shape({
    firstName: yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
  });
  export default SignupSchema