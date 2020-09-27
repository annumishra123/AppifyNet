import { FETCH_MOVIES, LOADING } from "../actions/types";

const initialState = {
  movies: {
    Search: [],
  },
  loading: false,
  movie: [],
  page: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: {
          ...state.movies,
          Search: [...state.movies.Search, ...action.payload.Search],
        },
        loading: false,
        page: state.page + 1,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
