import { FETCH_RESTAURANTS } from './types';
import axios from 'axios';

export const fetchRestaurants = () => dispatch => {

  axios.get("http://localhost:8080/restaurants/all")
    .then(res => {
      dispatch({
        type: FETCH_RESTAURANTS,
        payload: res.data
      })
    })
};