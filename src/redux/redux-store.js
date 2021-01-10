import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


let reducersBatch = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
}
);
let store = createStore(reducersBatch);

export default store;
