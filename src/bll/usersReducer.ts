import {Dispatch} from 'redux'
import {Users, usersAPI} from "../dal/usersApi";
import {v4 as uuid} from 'uuid';

const initialState: Array<Users> = []

export const usersReducer = (state: Array<Users> = initialState, action: ActionsType): Array<Users> => {
    switch (action.type) {
        case SET_USERS:
            return action.users.map(user => ({...user}))
        case ADD_USER:
            return [{...action.user}, ...state]
        case DELETE_USER:
            return state.filter(user => user.id !== action.userId)
        default:
            return state
    }
}

const defaultUser = {
    "id": 1,
    "name": "Default User",
    "username": "default",
    "email": "test@april.biz",
    "address": {
        "street": "some street",
        "suite": "Apt. 123",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

const unique_id = uuid();

const SET_USERS = "/users/SET-USERS"
const ADD_USER = "/users/ADD-USER"
const DELETE_USER = "/users/DELETE-USER"

export const setUsersDataAC = (users: Array<Users>) => ({type: SET_USERS, users} as const)
export const addUserAC = (user: Users) => ({type: ADD_USER, user} as const)
export const deleteUserAC = (userId: number | string) => ({type: DELETE_USER, userId} as const)


// thunks
export const fetchUsersTC = () => {
    return (dispatch: ThunkDispatch) => {
        usersAPI.getUsers()
            .then((res) => {
                dispatch(setUsersDataAC(res.data))
            })
    }
}

export const addUserTC = (name: string, email: string) => {
    return (dispatch: ThunkDispatch) => {
        dispatch(addUserAC({...defaultUser, name: name, email: email, id: unique_id}))
    }
}

export const deleteUserTC = (id: number| string) => {
    return (dispatch: ThunkDispatch) => {
        dispatch(deleteUserAC(id))
    }
}


// types
export type SetUsersDataActionType = ReturnType<typeof setUsersDataAC>;
export type AddUserActionType = ReturnType<typeof addUserAC>;
export type DeleteUserActionType = ReturnType<typeof deleteUserAC>;

type ActionsType =
    | SetUsersDataActionType
    | AddUserActionType
    | DeleteUserActionType

type ThunkDispatch = Dispatch<ActionsType>
