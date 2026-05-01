import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addGrocery } from './features/grocery/grocerySlice'

function GroceryForm() {

    const [input, setInput] = useState('');
    const dispatch = useDispatch()


    const addItem = (e) => {
        e.preventDefault()
        // if(!input.trim()) return;
        dispatch(addGrocery(input))
        setInput('');
    }

  return (
    <form onSubmit={addItem} className="flex gap-2">
      <input 
        type="text" 
        placeholder="Add Item..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 bg-stone-700 border-none rounded-xl px-4 py-3 text-stone-100 placeholder:text-stone-400 focus:ring-2 focus:ring-rose-400 outline-none transition-all"
      />
      <button type='submit' className="bg-rose-400 hover:bg-rose-500 text-stone-900 font-medium px-6 py-3 rounded-xl transition-colors duration-200">
        Add
      </button>
    </form>
  )
}

export default GroceryForm