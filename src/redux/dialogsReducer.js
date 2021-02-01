const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE"

let initialState = {
    dialogs: [
        { id: 1, name: "Kon" },
        { id: 2, name: "Hoi" },
        { id: 3, name: "Perdun" },
        { id: 4, name: "Bivalui" },
        { id: 5, name: "Trus" },
    ],
    messages: [
        { id: 1, message: "Privet" },
        { id: 3, message: "Bonjur" },
        { id: 3, message: "Hello" },
        { id: 4, message: "Privet ia Trus" },
    ],
}

const dialogsReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            let addMessage = {
                id: 5,
                message: action.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, addMessage],
            }
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageText) => {
    return {
        type: ADD_NEW_MESSAGE, newMessageText
    };
}
export default dialogsReducer;