export default defineNuxtPlugin(() => {
  function createValidator(regex: RegExp, required: boolean) {
    return (value: string): boolean => {
      const specialCharRegex = /[!#\$%&'\*\+\-\/=\?\^_`\{\|\}~]/;
      const isValid = required ? regex.test(value) : true;
      const isSpecialCharValid = !specialCharRegex.test(value);
      return isValid && isSpecialCharValid;
    }
  }
  return {
    provide: {
      email: (value: string, required: boolean): boolean => {
        const emailRegex = /^[^\s@]{1,255}@[^\s@]+\.[^\s@]+$/;
        return createValidator(emailRegex, required)(value);
      },
      password: (value: string, required: boolean): boolean => {
        const passwordRegex = /^([a-zA-Z0-9]{8,16})$/;
        return createValidator(passwordRegex, required)(value);
      }
    }
  }
})