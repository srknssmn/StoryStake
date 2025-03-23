import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './slicers/account';
import poolsReducer from './slicers/pools';
import txModalReducer from './slicers/txModal';
// import myNftsModalReducer from './slicers/myNftsModal';

export default configureStore({
    reducer: {
      account: accountReducer,
      pools: poolsReducer,
      txModal: txModalReducer,
    //   myNftsModal: myNftsModalReducer
    },
  })