import { setLocale } from 'yup';

export default defineNuxtPlugin(() => {
  setLocale({
    mixed: {
      required: 'This field is required'
    },
    string: {
      email: 'E-mail address is invalid',
      min: ({ min }) => `This field must be at least ${min} characters`,
      max: ({ max }) => `This field must be at most ${max} characters`,
    }
  });
});