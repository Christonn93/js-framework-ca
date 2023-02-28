import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';

export const Store = configureStore({
    reducer: {
        // This is the store we created above. We can add more than one store,
        // allowing for our app to scale if needed
        counter: counterReducer,
      },
});
