/* eslint-disable default-case */
/* eslint-disable default-param-last */
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  episodes: [],
  favourites: {},
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "GET_EPISODES":
      return {
        ...state,
        episodes: action.payload,
      };
  }
  return state;
};

const store = configureStore({
  reducer,
});

export default store;
