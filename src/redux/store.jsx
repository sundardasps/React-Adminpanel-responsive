import  {persistReducer}  from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { persistStore } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from './slice'



const persistConfig = {
    key:'root',
    storage,
};


const userPersisted = persistReducer(persistConfig,userReducer);


const Store = configureStore({
    reducer:{
        user:userPersisted,

    }
})

const persistor = persistStore(Store)
export {Store,persistor}


