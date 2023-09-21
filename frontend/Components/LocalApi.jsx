import axios from 'axios'
const RegisterUser = async (props) => {
    try {
        const response = await axios.post("http://localhost:1337/api/auth/local/register", {
            username: props.username,
            email: props.email,
            password: props.password
        })
        return response;
    } catch (error) {
        throw Error(error.response.data.error.message);
    }
}

const LoginUser = async (props) => {
    try {
        const response = await axios.post("http://localhost:1337/api/auth/local/", {
            identifier: props.email,
            password: props.password
        })
        return response;
    } catch (error) {
        throw Error(error.response.data.error.message);
    }
}

export { RegisterUser, LoginUser }