import { Constants } from './constants';
import { services } from './services';

export function getData(year, launch, landed) {
    return dispatch =>{
        dispatch(request());
        
        services.getDataServices(year, launch, landed).then(
            data=> dispatch(success(data)),
            error => dispatch(failure(error))
        )
    };

    function request(result) { return { type: Constants.GET_DATA_REQUEST, result } }
    function success(data) { return { type: Constants.GET_DATA_SUCCESS, data } }
    function failure(error) { return { type: Constants.GET_DATA_FAILURE, error } }
}