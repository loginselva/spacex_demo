import { Constants } from './constants';

const initialState = {
    isLoading: false,
    data:{}
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.GET_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case Constants.GET_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.data
            };
        default:
            return state;
    }
}