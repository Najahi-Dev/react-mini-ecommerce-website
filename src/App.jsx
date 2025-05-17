import { useState } from 'react'
import React from 'react'
import { useEffect } from 'react'
import './App.css'
import { toast, ToastContainer } from 'react-toastify'
import ProductList from './components/ProductList'

function App() {

  return (
    <div>
      <ProductList/>
    </div>
  )
}

export default App
