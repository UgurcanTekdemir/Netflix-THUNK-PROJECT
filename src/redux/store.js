import { applyMiddleware, combineReducers, createStore } from "redux";
import genreReducer from "./reucers/genreReducer";
import movieReducer from "./reucers/movieReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  genres: genreReducer,
  movies: movieReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
