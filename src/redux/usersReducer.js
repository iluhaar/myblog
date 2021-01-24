const FOLLOW = "FOLLOW"
const UNFOLLOW = "UN-FOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_NUMBER = "SET-TOTAL-USERS-NUMBER"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"

let initialState = {
    users: [],
    pageSize: 4,
    totalUsersNumber: 0,
    currentPage: 1,
    isFetching: false,

}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_NUMBER:
            return { ...state, totalUsersNumber: action.totalUsersNumber }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        default:
            return state;
    }
}
export const follow = (userID) => {
    return {
        type: FOLLOW, userID
    };
}
export const Unfollow = (userID) => {
    return {
        type: UNFOLLOW, userID
    };
}
export const setUsers = (users) => {
    return {
        type: SET_USERS, users
    };
}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    }
}
export const setTotalUsersNumber = (totalUsersNumber) => {
    return {
        type: SET_TOTAL_USERS_NUMBER, totalUsersNumber
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    }

}
export default usersReducer;