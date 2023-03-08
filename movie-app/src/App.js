import { Container } from '@mui/system';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import SimpleBottomNavigation from './components/MainNav';
import Trending from './Pages/Trending/Trending';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';
import Movies from './Pages/Movies/Movies';
import Error from './Pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='App'>
        <Container>
          <Routes>
            <Route path='/' >
              <Route index element={<Trending />} />
              <Route path='movies' element={<Movies />} />
              <Route path='tv-series' element={<Series />} />
              <Route path='search' element={<Search />} />
              <Route path='*' element={<Error />} />
            </Route>
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
