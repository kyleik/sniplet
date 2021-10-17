import { SET_TO_TRUE, SET_TO_FALSE } from './actions'

export const initialState = {
    playing: true,
}


const playingReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_TO_TRUE:
            return {
            playing: true,
            }
        case SET_TO_FALSE:
                return {
                playing: false,
                }
    

        default:
            return state;    



}
}

export default playingReducer;