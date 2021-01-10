const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE"
const ON_CHANGE_MESSAGE_AREA = "ON-CHANGE-MESSAGE-AREA"

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
    newMessageText: ['']
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let addMessage = {
                id: 5,
                message: state.newMessageText
            }
            state.messages.push(addMessage)
            state.newMessageText = ''
            return state;
        case ON_CHANGE_MESSAGE_AREA:
            state.newMessageText = action.messageText
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_NEW_MESSAGE,
    };
}
export const onChangeMessageAreaActionCreator = (message) => {
    return {
        type: ON_CHANGE_MESSAGE_AREA,
        messageText: message
    }
}
export default dialogsReducer;
// if (action.type === ADD_NEW_MESSAGE) {
    //     let addMessage = {
    //         id: 5,
    //         message: state.newMessageText
    //     }
    //     state.messages.push(addMessage)
    //     state.newMessageText = '';
    // }
    // else if (action.type === ON_CHANGE_MESSAGE_AREA) {
    //     state.newMessageText = action.messageText
    // }

    // return state;