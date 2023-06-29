import { createSlice } from '@reduxjs/toolkit'

type State5 = [
    [id: number],
    [
        {
            name: string
            text: string
            email: string
        }
    ]
]

const initialState = [
    [1],
    [
        {
            name: 'Serg',
            text: 'text',
            email: 'email',
        },
    ],
] as State5

export const commentSlice = createSlice({
    name: 'comme',
    initialState,
    reducers: {
        
        addComme: (state, action) => ({
             ...state,
            [action.payload.id]: [
                 ( 
                {
                    name: action.payload.name || '',
                    text: action.payload.text || '',
                    email: action.payload.email || '',
                }),
            ],
        
        }),
         
    },
})

export const { addComme } = commentSlice.actions
export default commentSlice.reducer
