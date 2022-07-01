import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';
class AuthService {
  formData: {username,password} = {username:String,password:String} ;
  accesstoken: string = '';
  
  login(user: { username: any; password: any; }) {
    this.formData.username = user.username;
    this.formData.password = user.password;
    return axios({
      url: API_URL + 'login/access-token',
      method:"POST",
      data : this.formData,
      headers: {
          "Content-Type": "multipart/form-data",
        }
    })    
      .then(response => {
        if (response.data.access_token) {
          localStorage.setItem('user', JSON.stringify(response.data.access_token));
        }
        console.log(response.data.access_token)
        this.accesstoken = response.data.access_token;
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}
export default new AuthService();