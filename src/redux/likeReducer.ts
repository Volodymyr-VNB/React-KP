import { AnyAction } from 'redux'
import articleArray  from 'utils/articleBlog'
// import { useState } from 'react'

// type LikeState = {
//     [id: number]: boolean
// }

// const initialState: LikeState = { 1: true, 15: true }
// articleArray.map(({id,likes}) =>
// {const [newLikeState, setnewLikeState] = useState<LikeState>(
//    { [id] : likes}
// )}
// )
let articProperties = articleArray.map((articleArray) => {
    let objectlik = (        
         articleArray.likes
    )
    return objectlik
})
let artic = ( false )
articProperties.unshift(artic);
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
