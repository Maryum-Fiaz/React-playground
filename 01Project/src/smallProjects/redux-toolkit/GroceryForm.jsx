import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addGrocery, updateGrocery} from './features/grocery/grocerySlice'

function GroceryForm() {


    const [input, setInput] = useState('');

    // item to edit
    const itemEditId = useSelector(state => state.grocery.editingId);
    const items = useSelector(state => state.grocery.items)
    const dispatch = useDispatch()
    
    // find that item to be edited
    const itemToEdit = items.find(item => item.id === itemEditId)
  
    useEffect(() => {
      if(itemToEdit) {
        setInput(itemToEdit.title)
      } else {
        setInput('')
      }

    }, [itemToEdit])
    

    const handleSubmit = (e) => {
      e.preventDefault()
      if(!input.trim()) return;

      if(itemToEdit){
        dispatch(updateGrocery({ id: itemEditId, title: input }))
      } else {
        dispatch(addGrocery(input))
      }

      setInput('')

    }

   
    console.log(itemToEdit);
    console.log('input: ', input)

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input 
        type="text" 
        placeholder="Add Item..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 bg-stone-700 border-none rounded-xl px-4 py-3 text-stone-100 placeholder:text-stone-400 focus:ring-2 focus:ring-rose-400 outline-none transition-all"
      />
      
      <button type='submit' className="bg-rose-400 hover:bg-rose-500 text-stone-900 font-medium px-6 py-3 rounded-xl transition-colors duration-200">
       {itemEditId !== null ? 'Update' : 'Add'}
      </button>
    </form>
  )
}

export default GroceryForm