import axios from 'axios';

export const FETCH_CAST = 'FETCH_CAST';
export function fetchCast(film) {
    const Cast_List= film.characters.map((data)=>{
        return axios.get(data);
    });
    return (dispatch)=>{
        axios.all(Cast_List).then((response)=>{
            const cast = response.map(function (castdata) {
                return castdata.data
            });
            dispatch({
                type: FETCH_CAST,
                payload: cast,
                filmTitle: film.title
            })
        })
    }
}