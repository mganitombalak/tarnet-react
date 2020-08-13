//ACTION
export const ACTION_SET_DATA = 'SET_DATA';

// ACTION TYPE
export const ENTITY_TYPE_CATEGORY = 'CATEGORY';

// ACTION CREATORS
export const setDataActionCreator = (entityType, payload) => {
    return {
        type: ACTION_SET_DATA,
        entityType: entityType,
        payload: payload
    };
}
