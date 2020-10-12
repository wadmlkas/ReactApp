const initialState = {
    levelList: ["home"],
};

const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_NAV":
            return { ...state, levelList: action.list };
        default:
            return state;
    }
};

export default navigationReducer;
