import {ADD_ARTICLE} from '../constants/action-types'
const forbiddenWords = ["spam", "money"];

function forbiddenWordsMiddleware ({dispatch}) {
    return next => action => {
        if(action.type === ADD_ARTICLE){
            const foundWord = forbiddenWords.filter(word => {
                const include = action.payload.title.includes(word)
                return include
            })
            if(foundWord.length){
                return dispatch({type: "FOUND_BAD_WORD"})
            }
            return next(action)
        }
    }
}

export default forbiddenWordsMiddleware