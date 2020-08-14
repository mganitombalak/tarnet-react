import {takeEvery, call, put, all} from 'redux-saga/effects';
import { ACTION_LOAD_DATA, ACTION_DELETE_DATA, ACTION_SET_DATA, setDataActionCreator, ENTITY_TYPE_CATEGORY, ENTITY_TYPE_UNIT } from '../actions';
import axios from 'axios';

export default function* setup(){
    console.log("My Saga middleware is now running. And ready for actions.");

    yield all([takeEvery(ACTION_LOAD_DATA, loadData), takeEvery(ACTION_DELETE_DATA, deleteData)]);    
}

var entity ="";
var token ="";
function* loadData(action){
    console.log("SAGA:LOAD DATA");
    console.log(action);
    try{
        if(action.entityType == ENTITY_TYPE_CATEGORY){
            entity = ENTITY_TYPE_CATEGORY.toLowerCase();
            console.log(entity);
            let result = yield call(sendHttpRequet);
            console.log(result);
            yield put(setDataActionCreator(ENTITY_TYPE_CATEGORY, result));
        }else if(action.entityType == ENTITY_TYPE_UNIT){
            entity = ENTITY_TYPE_UNIT.toLowerCase();
            let result = yield call(sendHttpRequet);
            console.log(result);
            yield put(setDataActionCreator(ENTITY_TYPE_UNIT, result));
        }
             
       
    }catch(e){
        console.log(e);
    }
   
}

function* deleteData(action){ 
    console.log("SAGA:DELETE DATA");
    console.log(action);

    entity = ENTITY_TYPE_UNIT.toLowerCase();
            let result = yield call(sendDeleteRequest);
            console.log(result);
            yield put(setDataActionCreator(ENTITY_TYPE_UNIT, result));

}


const sendHttpRequet = async () => {
    
    await axios.post("http://178.128.248.160:81/api/auth", {
        "username" : "mgani.tombalak@yahoo.com",
        "password" : "123456"
    }).then(authResponse => { token = authResponse.data.token;        
    })
    .catch(authErr => console.log(authErr));

    return axios.get('http://178.128.248.160:81/api/' + entity, {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then(response => response.data.data)
        .catch(err => console.log(err)); 
        
}

const sendDeleteRequest = async () => {
    let token;

    return axios.delete('http://178.128.248.160:81/api/' + entity+"/", {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then(response => response.data.data)
        .catch(err => console.log(err));         
}


//1. unit'te load buton ile .
//2. Unit için yapalım. Unit'i silecek middleware'i kurgula