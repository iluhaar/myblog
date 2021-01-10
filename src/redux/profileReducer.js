const ADD_POST = "ADD-POST"
const ON_CHANGE_AREA = "ON-CHANGE-AREA"

let initialState = {
    posts: [
        { id: 1, item: "Hi, wazzup?", likesCount: 25 },
        { id: 2, item: "GL HF", likesCount: 33 },
        { id: 3, item: "Hello", likesCount: 50 },
        { id: 4, item: "Dobriy den", likesCount: 71 },
    ],
    newPostText: ['Henlo Pepplo!']
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                item: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = '';
            return state;

        case ON_CHANGE_AREA:
            state.newPostText = action.newText
            return state;
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
export default profileReducer;

// if (action.type === ADD_POST) {
    //     let newPost = {
    //         id: 5,
    //         item: state.newPostText,
    //         likesCount: 0
    //     }
    //     state.posts.push(newPost)
    //     state.newPostText = '';

    // }
    // else if (action.type === ON_CHANGE_AREA) {
    //     state.newPostText = action.newText
    // }