import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';
class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login/access-token', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        console.log(user)
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