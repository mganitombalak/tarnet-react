import { ACTION_SET_DATA, ENTITY_TYPE_CATEGORY ,ENTITY_TYPE_UNIT} from "../actions";

const initials = {
    categories: []
};

export default (state = initials, action) => {
    // console.log(state);
    // console.log(action);
    // console.log("Store has been created");
    if (action.type === ACTION_SET_DATA) {
        switch (action.entityType) {
            case ENTITY_TYPE_CATEGORY:
                return { categories: action.payload };
                case ENTITY_TYPE_UNIT:
                return { unities: action.payload };
            default:
                return state;
        }
    }
}