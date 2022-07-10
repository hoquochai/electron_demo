const axios = require('axios').default;
const USER_URL = 'https://62c5a6aaa361f725128af1e8.mockapi.io/users'

class UserService {
    getUserList = () => {
        return axios.get(USER_URL);
    }
}

export default new UserService();