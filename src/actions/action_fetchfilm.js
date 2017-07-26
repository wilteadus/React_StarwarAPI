import axios from 'axios';

export const URL = 'https://swapi.co/api/';

export const FETCH_FILM = 'FETCH_FILM';

export function fetchFilm() {

    return function(dispatch){
        const url = `${URL}films/`
        axios.get(url).then(function(response){
            dispatch({
                type:'FETCH_FILM',
                payload:response.data.results
            })
        })
    };
}

