export type UserDataType = {email:string,password:string}

export type InputDataType = {
  label: string;
  type: "email" | "password" | "number" | "text";
  placeholder: string;
  value: string | number;
  required: boolean;
  isValid: boolean;
  error: string;
  validate: (value: string | number) => boolean;
  isVisibleIcon: boolean;
};
