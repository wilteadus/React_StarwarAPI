import { FETCH_CAST } from '../actions/action_fetchcast'
import { CANCEL_SELECT } from '../actions/action_cancelSelect'

export default function(state = { castList:[], selectedFilm:'' }, action) {
    switch (action.type){
        case FETCH_CAST:
            return { castList: action.payload, selectedFilm: action.filmTitle };
        case CANCEL_SELECT:
            return { castList:[], selectedFilm:'' };
    }

    return state;
}