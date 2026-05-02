import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeGrocery, setEditingId } from './features/grocery/grocerySlice'

function GroceryList() {

    const items = useSelector(state => state.grocery.items)
    const dispatch = useDispatch();


  return (
    <>
    {items.map(item => (

    <div key={item.id} className="flex items-center justify-between bg-stone-700/50 p-4 rounded-xl border border-stone-700 hover:border-stone-600 transition-all group">
      <div className="flex items-center gap-3">
        <input 
          type="checkbox" 
          className="w-5 h-5 rounded border-stone-600 bg-stone-800 text-sage-500 focus:ring-offset-stone-800 focus:ring-sage-500"
        />
        <span className="text-stone-200 group-hover:text-white transition-colors">
          {item.title}
        </span>
      </div>

      <div className="flex gap-2">
        <button className="p-2 text-stone-400 hover:text-rose-300 hover:bg-stone-800 rounded-lg transition-all"
        onClick={() => dispatch(setEditingId(item.id))}
        >
          ✏
        </button>
        <button className="p-2 text-stone-400 hover:text-red-400 hover:bg-stone-800 rounded-lg transition-all"
        onClick={() => dispatch(removeGrocery(item.id))}
        >
          ❌
        </button>
      </div>
    </div>
    ))}
    </>
  )
}

export default GroceryList