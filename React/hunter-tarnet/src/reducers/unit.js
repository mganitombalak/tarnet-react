import { ACTION_SET_DATA, ENTITY_TYPE_UNIT } from "../actions";

const initials = {
    unit: []
};

export default (state = initials, action) => {
    // console.log(state);
    // console.log(action);
    // console.log("Store has been created");
    if (action.type === ACTION_SET_DATA) {
        switch (action.entityType) {
            case ENTITY_TYPE_UNIT:
                return { unit: action.payload };
            default:
                return state;
        }
    }
}