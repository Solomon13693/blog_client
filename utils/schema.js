import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  phone: Yup.string().required('Phone is required'),
});

export const LoginSchema = Yup.object({
  email: Yup.string().email('Email address is invalid').required('Email address is required'),
  password: Yup.string().required('Password is required')
});

export const ForgotPassword = Yup.object({
  email: Yup.string().email('Email address is invalid').required('Email address is required'),
});

export const ResetPasswordSchema = Yup.object({
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const profileSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Email address is invalid').required('Email address is required'),
});

export const PasswordChangeSchema = Yup.object({
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  currentPassword: Yup.string()
    .required('Current password is required'),
  confirm_password: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const postSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required'),
  content: Yup.string()
    .required('Content is required'),
  status: Yup.string()
    .oneOf(['draft', 'published', 'scheduled'], 'Invalid status')
    .required('Status is required'),
  image: Yup.mixed()
    .required('Image is required')
    .test('fileSize', 'The file is too large', value => {
      return value && value.size <= 5 * 1024 * 1024; // 5MB max file size
    })
    .test('fileFormat', 'Unsupported File Format', value => {
      return value && ['image/jpeg', 'image/png'].includes(value.type);
    }),
  category: Yup.string()
    .required('Category is required'),
  scheduleDate: Yup.date()
    .when('status', {
      is: 'scheduled',
      then: (schema) => schema.required('Publication date is required'),
      otherwise: (schema) => schema.nullable() // Allows null when not scheduled
    })
});

export const updatepostSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required'),
  content: Yup.string()
    .required('Content is required'),
  status: Yup.string()
    .oneOf(['draft', 'published', 'scheduled'], 'Invalid status')
    .required('Status is required'),
  // image: Yup.mixed()
  //   .required('Image is required')
  //   .test('fileSize', 'The file is too large', value => {
  //     return value && value.size <= 5 * 1024 * 1024; // 5MB max file size
  //   })
  //   .test('fileFormat', 'Unsupported File Format', value => {
  //     return value && ['image/jpeg', 'image/png'].includes(value.type);
  //   }),
  category: Yup.string()
    .required('Category is required'),
  // scheduleDate: Yup.date()
  //   .when('status', {
  //     is: 'scheduled',
  //     then: (schema) => schema.required('Publication date is required'),
  //     otherwise: (schema) => schema.nullable() // Allows null when not scheduled
  //   })
});