import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BooksProvider } from './BooksContext'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import BookToRead from './pages/BookToRead'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
          <BooksProvider>
                <Navbar/>
                  <Routes>
                    <Route path= "/" element={<Home/>}></Route>
                    <Route path= "/toread" element={<BookToRead/>}></Route>
                  </Routes>
                
                
          </BooksProvider>
    </BrowserRouter>
    </>
  )
}

export default App