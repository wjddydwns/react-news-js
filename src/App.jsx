import { useState } from 'react'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import NewsHeader from './components/ui/NewsHeader'
import NewsList from './components/article/NewsList'

function App() {
  return (
    <DefaultLayout>
      
      <NewsHeader/>
      <NewsList/>
    </DefaultLayout>
    
  )
}

export default App
