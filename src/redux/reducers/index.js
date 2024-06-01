import { combineReducers } from 'redux';
import handleAuth from './handleAuth';
import handleSetUserId from './handleSetUserId';
import handleAddEntrie from './handleAddEntrie';

const rootReducers = combineReducers({
    handleAuth,
    handleSetUserId,
    handleAddEntrie,
});

export default rootReducers;