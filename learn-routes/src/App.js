import './App.css';
import { BrowserRouter, Route, Routes, Link, } from 'react-router-dom'
import Home from './pages/Home'
import BookList from './pages/BookList'
import Book from './pages/Book'
import NewBook from './pages/NewBook'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/' >Home</Link>
          </li>
          <li>
            <Link to='/books' >Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/books' element={<BookList />}/>
        <Route path='/books/:id' element={<Book />}/>
        <Route path='/books/new' element={<NewBook />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
