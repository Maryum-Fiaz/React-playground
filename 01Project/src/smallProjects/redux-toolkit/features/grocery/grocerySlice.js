import { createSlice, nanoid } from '@reduxjs/toolkit';


const initialState = {
    items: [{id: 1, title: '1st Grocery', bought: false}]
}

export const grocerySlice = createSlice({
    name: 'grocery',
    initialState,
    reducers: {

        // adding item
        addGrocery: (state, action) => {
            const newItem = {
                id: nanoid(),
                title: action.payload,
                bought: false,
            }
            state.items.push(newItem)
        },

        // deleting item
        removeGrocery: (state, action) => {
           state.items = state.items.filter(item => item.id !== action.payload)
        },

        // editing item
        updateGrocery: (state, action) => {
           const itemToUpdate = state.items.find(item => item.id === action.payload.id);

           if(itemToUpdate) {
            itemToUpdate.title = action.payload.title
           }
        }
    }
})


export const {addGrocery, removeGrocery, updateGrocery} = grocerySlice.actions;
export default grocerySlice.reducer;