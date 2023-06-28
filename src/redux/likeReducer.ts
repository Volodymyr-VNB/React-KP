import { AnyAction } from 'redux'
import articleArray from 'utils/articleBlog'

let articProperties = articleArray.map((articleArray) => {
    let objectlik = articleArray.likes
    return objectlik
})
let artic = false
articProperties.unshift(artic)
const articLikes = Object.assign({}, articProperties)
delete articLikes['0']

export const likeReducer = (state = articLikes, action: AnyAction) => {
    switch (action.type) {
        case 'TOGGLE_LIKE': {
            // console.log('state', state)

            return {
                ...state,
                [action.id]: !state[action.id],
            }
        }
        default:
            return state
    }
}
