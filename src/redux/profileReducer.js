const ADD_POST = "ADD-POST"
const ON_CHANGE_AREA = "ON-CHANGE-AREA"
const SET_USER_PROFILE = "SET-USER-PROFILE"
let initialState = {
    posts: [
        { id: 1, item: "Hi, wazzup?", likesCount: 25 },
        { id: 2, item: "GL HF", likesCount: 33 },
        { id: 3, item: "Hello", likesCount: 50 },
        { id: 4, item: "Dobriy den", likesCount: 71 },
    ],
    newPostText: ['Henlo Pepplo!'],
    profile: null
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                item: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''

            }
        }
        case ON_CHANGE_AREA: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default:
            return state;
    }

}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
}

export const onChangeAreaActionCreator = (text) => {
    return {
        type: ON_CHANGE_AREA,
        newText: text,
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}
export default profileReducer;