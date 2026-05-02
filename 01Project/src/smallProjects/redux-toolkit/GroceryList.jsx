import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeGrocery, setEditingId, toggleBought } from './features/grocery/grocerySlice'

function GroceryList() {

    const items = useSelector(state => state.grocery.items)
    const dispatch = useDispatch();

    console.log('items: ', items);
    

  return (
    <>
    {items.map(item => (

    <div key={item.id} className={`flex items-center justify-between p-4 rounded-xl border transition-all group ${
    item.bought 
    ? 'bg-stone-800/40 border-stone-700 opacity-70' 
    : 'bg-stone-700/50 border-stone-600'
}`}>
  <div className="flex items-center gap-3">
    <div className="relative flex items-center">
        <input 
          type="checkbox" 
          checked={item.bought}
          onChange={() => dispatch(toggleBought(item.id))}
          className={`appearance-none w-5 h-5 rounded border cursor-pointer transition-all
            ${item.bought 
                ? 'bg-lime-500 border-lime-500' 
                : 'bg-stone-800 border-stone-600'}`}
        />
        {item.bought && (
            <span className="absolute text-stone-900 pointer-events-none left-1 text-md">
                ✓
            </span>
        )}
    </div>

    <span className={`transition-all ${
        item.bought ? 'text-stone-500 line-through' : 'text-stone-200'
    }`}>
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