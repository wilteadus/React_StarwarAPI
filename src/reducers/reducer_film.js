import { FETCH_FILM } from '../actions/action_fetchfilm'


export default function (state = [],action) {
    switch (action.type) {
        case FETCH_FILM:
            return action.payload;
    }
    return state;
}