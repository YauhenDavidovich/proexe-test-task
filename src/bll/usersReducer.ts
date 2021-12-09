import {Dispatch} from 'redux'
import {Users, usersAPI} from "../dal/usersApi";

const initialState: Array<Users> = []

export const usersReducer = (state: Array<Users> = initialState, action: ActionsType): Array<Users> => {
    switch (action.type) {
        case SET_USERS:
            return action.users.map(user => ({...user}))
        default:
            return state
    }
}

const SET_USERS = "/users/SET-USERS"

export const setUsersDataAC = (users: Array<Users>) => ({type: SET_USERS, users} as const)



// thunks
export const fetchUsersTC = () => {
    return (dispatch: ThunkDispatch) => {
        usersAPI.getUsers()
            .then((res) => {
                dispatch(setUsersDataAC(res.data))
            })
    }
}

// types
export type SetUsersDataActionType = ReturnType<typeof setUsersDataAC>;

type ActionsType =
    | SetUsersDataActionType

type ThunkDispatch = Dispatch<ActionsType>
