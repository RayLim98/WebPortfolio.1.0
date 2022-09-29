import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Main from './pages/Main';
import Contact from './pages/Contact';
import GlobalStyles from './globalStyling';

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
