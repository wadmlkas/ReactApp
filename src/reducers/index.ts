import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import sidebar from "./sidebar";
import navigation from "./navigation";

export default combineReducers({
    todos,
    visibilityFilter,
    sidebar,
    navigation,
});
