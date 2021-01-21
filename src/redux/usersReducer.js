const FOLLOW = "FOLLOW"
const UNFOLLOW = "UN-FOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_NUMBER = "SET-TOTAL-USERS-NUMBER"

let initialState = {
    users: [],
    pageSize:4, 
    totalUsersNumber:60,
    currentPage:2
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
        default:
            return state;
    }
}

export const followAC = (userID) => {
    return {
        type: FOLLOW, userID
    };
}
export const UnfollowAC = (userID) => {
    return {
        type: UNFOLLOW, userID
    };
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS, users
    };
}
export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    }
}
export const setTotalUsersNumberAC = (totalUsersNumber) => {
    return {
        type: SET_TOTAL_USERS_NUMBER, totalUsersNumber
    }
}
export default usersReducer;