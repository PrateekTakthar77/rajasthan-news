import types from "../types";
import store from "../store";
import { apiGet } from "../../Services/api"
import { GET_ARTICLES } from "../../Services/urls"


const { dispatch } = store

export async function getArticles() {
    // apiGet(GET_ARTICLES).then((res) => {
    //     console.log('GET ARTICLES RESPONSE', res);
    //     // dispatch({
    //     //     type: types.GET_ARTICLES,
    //     //     payload: res
    //     // })
    // });
    const res = await fetch(GET_ARTICLES);
    const responseJson = await res.json();
    console.log(responseJson);
    dispatch({
        type: types.GET_ARTICLES,
        payload: responseJson
    })
};
