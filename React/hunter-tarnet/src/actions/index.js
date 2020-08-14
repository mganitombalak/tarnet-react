//ACTION
export const ACTION_SET_DATA = 'SET_DATA';
export const ACTION_LOAD_DATA = 'LOAD_DATA';
export const ACTION_DELETE_DATA = 'DELETE_DATA';
export const SET_ACTION_DELETE_DATA = 'SET_DELETED_DATA';

// ACTION TYPE
export const ENTITY_TYPE_CATEGORY = 'CATEGORY';
export const ENTITY_TYPE_UNIT = 'UNIT';

// ACTION CREATORS
export const setDataActionCreator = (entityType, payload) => {
    return {
        type: ACTION_SET_DATA,
        entityType: entityType,
        payload: payload
    };
}

export const loadDataActionCreator = (entityType) => {
    return {
        type: ACTION_LOAD_DATA,
        entityType: entityType
    };
}


export const deleteDataActionCreator = (entityType,id) => {
    return {
        type: ACTION_DELETE_DATA,
        entityType: entityType,
        payload:id
    };
}



export const setDeleteDataActionCreator = (entityType,payload) => {
    return {
        type: SET_ACTION_DELETE_DATA,
        payload:payload
    };
}
