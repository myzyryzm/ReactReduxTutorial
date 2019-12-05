import {ADD_ARTICLE} from '../constants/action-types'

export function addArticle (payload){
    return {type: ADD_ARTICLE, payload}
}

export function getData () {
    return dispatch => fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            console.log(dispatch, json)
            dispatch({type: "ADD_DATA", json})
        })
}