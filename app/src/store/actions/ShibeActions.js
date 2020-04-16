import axios from 'axios';

export const fetchShibe = () => {
    return dispatch =>  {
        dispatch ({ type: 'FETCH_DOG_START' })
        axios.get("https://dog.ceo/api/breeds/image/random")
        .then(res => 
            dispatch({ type: 'FETCH_DOG_SUCCESS', payload: res.data.message }))
        .catch(err => console.log(err))
    }
}

export const updateShibe = newShibe => {
    return {}
}