import axios from "axios";
import { Base_api } from "../lib/utils/constants";

import { isAuthenticated, user_data } from "../store/store";

class Auth_Service {
    formData = { username: String, password: String };
    async login(user: { username: any; password: any; }) {
        try {
            this.formData.username = user.username;
            this.formData.password = user.password;
            await axios({
                url: Base_api + 'login/access-token',
                method: "POST",
                data: this.formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
                .then(async response => {
                    let set_user;
                    if (response.data) {
                        localStorage.setItem('token', response.data.access_token);
                        await axios({
                            url: Base_api + 'login/test-token',
                            method: "POST",
                            headers: {
                                "Content-Type": "multipart/form-data",
                                "Authorization": "Bearer " + response.data.access_token
                            }
                        })
                            .then(response => {
                                if (response.data) {
                                    user_data.set(JSON.stringify(response.data))
                                    set_user = localStorage.setItem('user',response.data)                                      
                                    user_data.subscribe((value) => set_user = value)
                                }
                                return response.data;
                            })                       
                    }
                    return response.data;
                });
            isAuthenticated.set(true);
        } catch (error) {
            console.error(error)
        }
    }    
}
export default new Auth_Service;