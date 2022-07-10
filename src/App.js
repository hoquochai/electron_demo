import './App.css';
import Create from './components/user/create';
import Read from './components/user/index';
import Update from './components/user/update';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/create' element={<Create/>}/>
                <Route path='/' element={<Read/>}/>
                <Route path='/update' element={<Update/>}/>
            </Routes>
        </Router>
    );
}

export default App;