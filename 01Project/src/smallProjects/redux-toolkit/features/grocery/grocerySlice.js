import { createSlice, nanoid } from '@reduxjs/toolkit';


const initialState = {
    items: [],  // all items here, in object form e.g; [{}, {}, {}...]
    editingId: null, // will have same value id as item.id to update, only that item('s id) which is going to update
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

           if(state.editingId === action.payload){
            state.editingId = null;
           }
        },

        // editing item
        updateGrocery: (state, action) => {
            
           const itemToUpdate = state.items.find(item => item.id === action.payload.id);

           if(itemToUpdate) {
            itemToUpdate.title = action.payload.title
           }

           state.editingId = null
        },

        setEditingId: (state, action) => {
            state.editingId = state.editingId === action.payload ? null : action.payload;
        },

        // toggle bought check
        toggleBought: (state, action) => {
            const itemBought = state.items.find(item => item.id === action.payload)

            if(itemBought){
                itemBought.bought = !itemBought.bought
            }
        }
    }
})


export const {addGrocery, removeGrocery, updateGrocery, setEditingId, toggleBought} = grocerySlice.actions;
export default grocerySlice.reducer;