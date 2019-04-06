import Type from '../actions/Type'

let initialState ={
    isAuthenticate: false,
    user : {},
    errors:{},
    message:''
}
    
const authReducer = (state = initialState  , action) => {
    switch (action.type) {
        case Type.USER_REGISTRATION:{

            return {
                ...state,
                message: action.payload.message
            }
        }
        case Type.USER_REGISTRATION_ERROR:{
            return {
                ...state,
                errors:action.payload.errors
            }
        } 
        case Type.USER_LOGIN:{
            return {
                ...state,
                message: action.payload.message,
                user : action.payload.user,
                isAuthenticate: Object.keys(action.payload.user).length > 0 ? true : false,
                errors:{}
            }
        }
        case Type.USER_LOGIN_ERROR:{
            return {
                ...state,
                errors:action.payload.errors
            }
        } 
        
                   
        default:
            return state
    }
}

export default  authReducer