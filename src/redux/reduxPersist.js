import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default reducers => {
    const persistedReducers =persistReducer({
        key: 'delivery-helper',
        storage,
        whiteList: ['handleAuth', 'handleSetUserId', 'handleAddEntrie']
    }, reducers);

    return persistedReducers;
}
