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
    <div key={item.id} className={`flex items-center justify-between p-4 rounded-xl border transition-all group gap-4 ${
      item.bought 
        ? 'bg-stone-800/40 border-stone-700 opacity-70' 
        : 'bg-stone-700/50 border-stone-600'
    }`}>
      <div className="flex items-center gap-3 min-w-0">
        <div className="relative flex items-center shrink-0">
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
            <span className="absolute text-stone-900 pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-bold">
              ✓
            </span>
          )}
        </div>

        <span className={`transition-all wrap-break-words min-w-0 ${
          item.bought ? 'text-stone-500 line-through' : 'text-stone-200'
        }`}>
          {item.title}
        </span>
      </div>

      {/* 3. Added flex-shrink-0 so the buttons never get squeezed */}
      <div className="flex gap-2 flex-shrink-0">
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