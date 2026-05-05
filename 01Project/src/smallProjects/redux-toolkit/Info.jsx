import React, { useState } from 'react'

function Info({ onClose }) {
  const [isNextPg, setIsNextpg] = useState(false)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
      <div className="bg-stone-800 border border-stone-700 p-6 rounded-2xl max-w-sm w-full shadow-2xl relative">
        
        <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-rose-400">╳</button>

        <h2 className="text-rose-300 font-serif italic text-xl mb-4">
          {isNextPg ? 'Update Logic' : 'Redux Basics'}
        </h2>

        <div className="text-stone-300 text-sm leading-relaxed mb-6">
          {isNextPg ? (
            <ul className="space-y-2">
              <li className='text-center text-xl font-semibold text-rose-500'>Better method</li>
              <li>• <b>editingId:</b> A "spotlight" variable in the store root. There is only one editingId key and whichever item is going to update, it's item id would be the value of editingId. See in <b className='text-amber-400'>grocerySlice.js</b> file. </li>
              <li>• <b>No Booleans:</b> Instead of true/false inside item (like we used to do: isEditing: false ❌), items stay clean; only the outside key editingId changes.</li>
              <li>• <b>useEffect:</b> Syncs the input box whenever the ID changes, as the variable 'itemToEdit' also changes. See in <b className='text-blue-400'>GroceryForm.jsx</b> </li>
            </ul>
          ) : (
            <ul className="space-y-2">
              <li>• <b>Store:</b> The store of the Grocery where all data is contained. <b className='text-amber-400'>store.js</b></li>
              <li>• <b>Slice:</b> A specific folder for grocery logic, where initialState, reducers (funtions to add, update, delete, toggle) exist. <b className='text-amber-400'>grocerySlice.js</b></li>
              <li>• <b>useDispatch:</b> Sends "actions" to change data e.g; create/add, delete, update, toggle. See in <b className='text-blue-400'>GroceryForm.jsx  GroceryList.jsx</b></li>
              <li>• <b>useSelector:</b> Watches data and triggers a re-render e.g; new item added, show new item. See in <b className='text-blue-400'>GroceryForm.jsx  GroceryList.jsx</b></li>
            </ul>
          )}
        </div>

        <button 
          onClick={() => setIsNextpg(!isNextPg)}
          className="w-full bg-stone-700 hover:bg-stone-600 py-2 rounded-lg transition-colors"
        >
          {isNextPg ? 'Previous' : 'Next Page ➔'}
        </button>
      </div>
    </div>
  )
}

export default Info