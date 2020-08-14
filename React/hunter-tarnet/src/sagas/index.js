import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTION_LOAD_DATA, setDataActionCreator, ENTITY_TYPE_CATEGORY } from '../actions';
import axios from 'axios';

export default function* setup() {
    console.log("My Saga middleware is now running.And ready for actions");
    yield takeEvery(ACTION_LOAD_DATA, loadData);
}

function* loadData(action) {
    // console.log("SAGA:LOAD DATA")
    // console.log(action);
    try {
        let result = yield call(sendHttpRequest);
        // console.log(result);
        yield put(setDataActionCreator(ENTITY_TYPE_CATEGORY, result));
    } catch (e) {
        console.log(e)
    }
}

// const sendHttpRequest = () => {
//     // console.log("SAGA:REQUEST ABOUT TO SENT");
//     return axios.post('http://178.128.248.160:81/api/auth', {
//         "username": "mgani.tombalak@yahoo.com",
//         "password": "123456"
//     })
//     .then(authResponse => {
//         let token = authResponse.data.token;
//         return axios.get('http://178.128.248.160:81/api/category', {
//             headers: { Authorization: `Bearer ${token}` }
//         })
//         .then(response => response.data.data)
//         .catch(err => console.log(err));
//     })
//     .catch(authErr => console.log(authErr));
// }

const sendHttpRequest = async () => {
    let token;
    // console.log("SAGA:REQUEST ABOUT TO SENT");
    await axios.post('http://178.128.248.160:81/api/auth', {
        "username": "mgani.tombalak@yahoo.com",
        "password": "123456"
    })
        .then(authResponse => { token = authResponse.data.token; })
        .catch(authErr => console.log(authErr));


    return axios.get('http://178.128.248.160:81/api/category', {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then(response => response.data.data)
        .catch(err => console.log(err));
}