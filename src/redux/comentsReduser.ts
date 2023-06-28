import { createSlice } from "@reduxjs/toolkit";
type State = {
    name: string
    text: string
    email: string
}

const initialState: State ={
    
            
                name: 'Serg',
                text: 'nice article',
                email: 'Sergi1970@i.ua',
            
            
                
            
        
}

export const commentSlice =createSlice({
    name: "comment",
    initialState,
    reducers:{},

})