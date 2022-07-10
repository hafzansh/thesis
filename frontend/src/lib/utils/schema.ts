import * as yup from "yup";

export const sign_in_schema = yup.object().shape({
    username: yup.string().required().label("Username"),
    password: yup.string().required().label("Password"),
});

export default class User {
    username: string;
    password: string;    
    constructor(username:string, password:string) {
      this.username = username;
      this.password = password;
    }
}
