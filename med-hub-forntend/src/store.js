import {createStore} from  "redux";

import rootReducer from './components/reducer';
import storage from "redux-persist/lib/storage";
import { persistReducer,persistStore } from "redux-persist";

const PersistConfig = {
    key : 'persist-key',
    
    storage
}

const persistedReducer = persistReducer(PersistConfig,rootReducer)

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const persistor = persistStore(store);
//persistor.purge();
export default store;
export {persistor}
