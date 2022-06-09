import {Actions} from "./global.actions";

const initialState = {
    watchDataKeys: [
        {name: 'bpm', selected: false},
        {name: 'stress', selected: false},
        {name: 'sleep', selected: false}
    ],
}

export default function globalReducer(state = initialState, action: any) {
    switch (action.type) {
        case Actions.setWatchDataKeys:
            return {...state, api: action.payload.watchDataKeys}
        default:
            return state;
    }
}
