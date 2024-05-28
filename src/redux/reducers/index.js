import { combineReducers } from 'redux';
import handleAuth from './handleAuth';
import handleSetUser from './handleSetUser';
import handleAddEntrie from './handleAddEntrie';

const rootReducers = combineReducers({
    handleAuth,
    handleSetUser,
    handleAddEntrie,
});

export default rootReducers;