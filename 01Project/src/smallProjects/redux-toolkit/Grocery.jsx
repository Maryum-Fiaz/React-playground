import React from 'react'
import GroceryForm from './GroceryForm'
import GroceryList from './GroceryList'
import { Provider } from 'react-redux'
import store from './store/store'

function Grocery() {
  return (
    <Provider store={store}>
    <div className="min-h-screen bg-stone-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-stone-800 shadow-2xl rounded-2xl p-8 border border-stone-700">
        <h1 className="text-3xl font-light text-rose-200 mb-8 text-center tracking-tight">
          Grocery <span className="font-serif italic">Grabber</span>
        </h1>
        
        <div className="mb-8">
          <GroceryForm />
        </div>

        <div className="space-y-3">
          <GroceryList />
        </div>
      </div>
    </div>
    </Provider>
  )
}

export default Grocery