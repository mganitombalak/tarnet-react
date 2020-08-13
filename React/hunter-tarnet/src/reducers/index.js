import { ACTION_TYPE_CATEGORY, ACTION_SET_DATA } from "../actions";

const initials = {
    categories: []
};

export default (state = initials, action) => {
    console.log(state);
    console.log(action);
    console.log("Store has been created");
    if (action.actionType === ACTION_TYPE_CATEGORY) {
        switch (action.type) {
            case ACTION_SET_DATA:
                return { categories: action.payload };
            default:
                return state;
        }
    }
}