import * as Yup from 'yup';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;

export const getValidationSchema = formType => {
  switch (formType) {
    case 'signup':
      return Yup.object().shape({
        fullName: Yup.string().required('Full name required'),
        email: Yup.string().email('Invalid email').required('Email required'),
        phone: Yup.string().required('Phone number required'),
        password: Yup.string()
          .min(6, 'Minimum 6 characters')
          .required('Password required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm your password'),
      });
    case 'login':
      return Yup.object().shape({
        email: Yup.string()
          .required('Phone number or email is required')
          .test(
            'email-or-phone',
            'Enter a valid email or phone number',
            value =>
              !!value &&
              (Yup.string().email().isValidSync(value) ||
                /^[0-9]{10,14}$/.test(value)),
          ),
        password: Yup.string()
          .min(6, 'Minimum 6 characters')
          .required('Password required'),
      });
    case 'emailUpdate':
      return Yup.object().shape({
        email: Yup.string()
          .email('Invalid email')
          .required('Email is required'),
      });
    case 'verifyotp':
      return Yup.object().shape({
        otp: Yup.array()
          .of(Yup.string().length(1, 'Must be 1 digit'))
          .min(5, 'OTP must be 5 digits')
          .max(5, 'OTP must be 5 digits')
          .test('all-filled', 'Enter all 5 digits', value =>
            value.every(v => v !== ''),
          ),
        // otp: Yup.string()
        //   .length(5, 'Enter 5 digit code')
        //   .required('OTP is required'),
      });
    case 'newpassword':
      return Yup.object().shape({
        password: Yup.string().min(6, 'Too short!').required('Required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password')], 'Passwords must match')
          .required('Required'),
      });
    case 'signup_verify_otp':
      return Yup.object().shape({
        otp: Yup.array()
          .of(Yup.string().length(1, 'Must be 1 digit'))
          .min(5, 'OTP must be 5 digits')
          .max(5, 'OTP must be 5 digits')
          .test('all-filled', 'Enter all 5 digits', value =>
            value.every(v => v !== ''),
          ),
      });
    case 'payment':
      return Yup.object().shape({
        name: Yup.string().required('Card holder name is required'),
        cardNumber: Yup.string()
          .matches(/^[0-9]{16}$/, 'Card number must be 16 digits')
          .required('Card number is required'),
        cvv: Yup.string()
          .matches(/^[0-9]{3,4}$/, 'CVV must be 3 or 4 digits')
          .required('CVV is required'),
        expiryDate: Yup.string().required('Expiry date is required'),
      });
    case 'personal_information':
      return Yup.object().shape({
        fullName: Yup.string().required('Full Name is required'),
        email: Yup.string()
          .email('Invalid email')
          .required('Email is required'),
        phone: Yup.string()
          .matches(/^[0-9\-+()\s]*$/, 'Invalid phone number')
          .required('Phone number is required'),
      });
    case 'change_password':
      return Yup.object().shape({
        currentPassword: Yup.string().min(6, 'Too short!').required('Required'),
        newPassword: Yup.string().min(6, 'Too short!').required('Required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('newPassword')], 'Passwords must match')
          .required('Required'),
      });
    case 'edit_profile':
      return Yup.object().shape({
        fullName: Yup.string().required('Full name is required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        phone: Yup.string()
          .matches(/^[0-9\-+()\s]*$/, 'Invalid phone number')
          .required('Phone number is required'),
      });
    default:
      return Yup.object();
  }
};
