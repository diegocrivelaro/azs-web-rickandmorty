/* eslint-disable default-case */
/* eslint-disable default-param-last */
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  episodes: [],
  favorites: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EPISODES":
      return {
        ...state,
        episodes: action.payload,
      };
    case "SET_FAVORITE":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          [action.payload.id]: {
            ...state.favorites[action.payload.id],
            favorite: action.payload.favorite,
          },
        },
      };
    case "SET_CHECKED":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          [action.payload.id]: {
            ...state.favorites[action.payload.id],
            checked: action.payload.checked,
          },
        },
      };
  }
  return state;
};

const store = configureStore({
  reducer,
});

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
