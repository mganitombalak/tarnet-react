import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTION_LOAD_DATA,ACTION_DELETE_DATA, setDataActionCreator,setDeleteDataActionCreator,ENTITY_TYPE_CATEGORY } from '../actions';
import axios from 'axios';

export default function* setup() {
    console.log("My Saga middleware is now running.And ready for actions");
    yield takeEvery(ACTION_LOAD_DATA, loadData);
    yield takeEvery(ACTION_DELETE_DATA, deleteData);
}

function* loadData(action) {
    // console.log("SAGA:LOAD DATA")
     console.log(`action ${action.type}`);
     console.log(`action ${action.entityType}`);

    try {
        let result = yield call(sendHttpRequest,action.entityType);
        // console.log(result);
        yield put(setDataActionCreator(action.entityType, result));
    } catch (e) {
        console.log(e)
    }
}


function* deleteData(action) {
    // console.log("SAGA:LOAD DATA")
    console.log(`action ${action.type}`);
    console.log(`action deleteData ${action.entityType}`);
    console.log(`action ${action.id}`);
    try {
        let result = yield call(deleteDataRequest,action.entityType,action.id);
        // console.log(result);
        yield put(setDeleteDataActionCreator(action.entityType, action.id));
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

const sendHttpRequest = async (entityType) => {
    let token;
    // console.log("SAGA:REQUEST ABOUT TO SENT");
    await axios.post('http://178.128.248.160:81/api/auth', {
        "username": "mgani.tombalak@yahoo.com",
        "password": "123456"
    })
        .then(authResponse => { token = authResponse.data.token; })
        .catch(authErr => console.log(authErr));

    let url = 'http://178.128.248.160:81/api/'+entityType ;
    return axios.get(url, {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then(response => response.data.data)
        .catch(err => console.log(err));
}


const deleteDataRequest = async (entityType,id) => {
    let token;
    // console.log("SAGA:REQUEST ABOUT TO SENT");
    await axios.post('http://178.128.248.160:81/api/auth', {
        "username": "mgani.tombalak@yahoo.com",
        "password": "123456"
    })
        .then(authResponse => { token = authResponse.data.token; })
        .catch(authErr => console.log(authErr));

    let url = 'http://178.128.248.160:81/api/'+entityType ;
    return axios.delete(url, {
        headers: { Authorization: `Bearer ${token}` }
    },id)
        .then(response => response)
        .catch(err => console.log(err));
}