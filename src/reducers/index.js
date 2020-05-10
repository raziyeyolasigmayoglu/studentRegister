import {combineReducers} from 'redux';
import authenticationReducers from './AuthenticationReducers';
import studentCreateReducers from './StudentCreateReducers';
import studentDataReducers from './StudentDataReducers';
import studentUpdateReducers from './StudentUpdateReducers';

export default combineReducers({
    authenticationResponse: authenticationReducers, 
    studentListResponse: studentCreateReducers,
    studentDataResponse: studentDataReducers,
    studentUpdateResponse: studentUpdateReducers
}); 