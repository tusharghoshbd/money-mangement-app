import Axios from 'axios'
import Type from '../actions/Type'
import jwtDecode from 'jwt-decode'
import setAuthHeader from "../../utils/setAuthHeader"


export const registrationAction = (user) => {

    return (dispatch) => {
        Axios.post('/api/users/register', user).then((data) => {
            console.log(data.data.message);
            dispatch({
                type: Type.USER_REGISTRATION,
                payload: {
                    message: data.data.message
                }
            })
            console.log(data.message);

        }).catch((error) => {
            dispatch({
                type: Type.USER_REGISTRATION_ERROR,
                payload: {
                    errors: error.response.data
                }
            })
            //console.log(error.response.data);

        });
    }
}

export const loginAction = (user, history) => {

    return (dispatch) => {
        Axios.post('/api/users/login', user).then((data) => {
           
            localStorage.setItem('token', data.data.token);
            setAuthHeader(data.data.token);
            let decode = jwtDecode(data.data.token);


            dispatch({
                type: Type.USER_LOGIN,
                payload: {
                    message: data.data.message,
                    user:decode
                }
            })

            console.log(history);
            history.push('/home');

        }).catch((error) => {
            dispatch({
                type: Type.USER_LOGIN_ERROR,
                payload: {
                    errors: error.response.error
                }
            })
            //console.log(error.response.data);

        });
    }
}


export const logout =  (history)=>{
    localStorage.removeItem('token');
    history.push('/login');
    return {
        type: Type.USER_LOGIN,
        payload:{
            user : {},
            message: ""
        }
    }
}   