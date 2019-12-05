import {ADD_ARTICLE} from '../constants/action-types'

const initialState = {
    articles: [],
    remoteArticles: []
}

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    }
    if(action.type === "GET_DATA"){
      return Object.assign({}, state, {
        remoteArticles: state.remoteArticles.concat(action.payload)
      })
    }
    return state;
  }

export default rootReducer