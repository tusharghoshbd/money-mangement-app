import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './stores/'
import Type from '../src/stores/actions/Type'
import jwtDecode from 'jwt-decode'
import setAuthHeader from "../src/utils/setAuthHeader"

let token = localStorage.getItem('token');
if(token){
    let decode = jwtDecode(token);
    setAuthHeader(token);
    store.dispatch({
        type: Type.USER_LOGIN,
        payload: {
            message: '',
            user:decode
        }
    })
}

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
