import { AnyAction } from "redux";


export const AuthActionType = {
    SET_CURRENT_USER: "@auth/SET_CURRENT_USER",
    UPDATE: "@auth/UPDATE",
    LOGOUT: "@auth/LOGOUT"
  };

export const setCurrentUser = (user: User) => ({
    type: AuthActionType.SET_CURRENT_USER,
    payload: { user}
})

export const updateUserData = (user: User) => ({
    type: AuthActionType.UPDATE,
    payload: {user}
})

export const Logout = () => ({
    type: AuthActionType.LOGOUT,
    
})


export interface User {
    username: string
    name: string | null;
    email: string | null;
    bio: string | null;
    location: string | null;
    company: string | null;
    avatar: string;
    followers: any[] | null;
    followers_quantity: number;
    following: any[] | null;
    following_quantity: number;
    Repos: any[] | null;
    repos_quantity: number;
    starred: string | null
    organizations: string | null;
}

interface respository {
    name:string;
    description: string;
    stars: number;
    private: boolean
    
}
interface AuthState {
    currentUser: User |null,
    isLoading: boolean

}

const initialState: AuthState = {
    currentUser: null,
    isLoading: true
}

export const AuthReducer = (
    state = initialState,
    action: AnyAction
): AuthState => {
    switch (action.type) {
        case AuthActionType.SET_CURRENT_USER:
            return {...state, currentUser: action.payload.user}
        case AuthActionType.UPDATE:
            return {...state, currentUser: action.payload.user}
        case AuthActionType.LOGOUT:
            return {...state, currentUser: null}
        default:
            return state
    }

}