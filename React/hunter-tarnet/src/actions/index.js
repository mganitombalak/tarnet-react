//ACTION
export const ACTION_SET_DATA = 'SET_DATA';
export const ACTION_LOAD_DATA = 'LOAD_DATA';
export const ACTION_DELETE_DATA = 'DELETE DATA';

// ACTION TYPE
export const ENTITY_TYPE_CATEGORY = 'CATEGORY';

// ACTION TYPE
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

export const deleteDataActionCreator = (entityType, id) => {
    return {
        type: ACTION_DELETE_DATA,
        entityType: entityType,
        id: id
    };
}
