import { combineReducers } from 'redux';
import FilmReducer from './reducer_film';
import CastReducer from './reducer_selectfilm';

const rootReducer = combineReducers({
    film: FilmReducer,
    select_film: CastReducer
});

export default rootReducer;
