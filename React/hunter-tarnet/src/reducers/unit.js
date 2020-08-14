import { ACTION_SET_DATA, ENTITY_TYPE_UNIT } from "../actions";
export default (state=[], action) => {
    // console.log(state);
    // console.log(action);
    console.log('============unit-end===========');
    // console.log("Store has been created");
    if (action.type === ACTION_SET_DATA) {
        switch (action.entityType) {
            case ENTITY_TYPE_UNIT:
                return action.payload;
            default:
                return state;
        }
    }
    return state;
}