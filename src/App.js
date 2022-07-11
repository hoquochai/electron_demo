import './App.css';
import Create from './components/user/create';
import Read from './components/user/index';
import Update from './components/user/update';
import Header from './components/Header/Header';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import { 
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

function App() {
    return (
        <div className='App'>
            <Header />
            <div className="container d-flex align-items-center flex-column">
                <Router>
                    <Routes>
                        <Route path='/' element={<RegistrationForm />} />
                    </Routes>
                </Router>
            </div>
        </div>
    )
    // return (
    //     <Router>
    //         <Routes>
    //             <Route path='/create' element={<Create/>}/>
    //             <Route path='/' element={<Read/>}/>
    //             <Route path='/update' element={<Update/>}/>
    //         </Routes>
    //     </Router>
    // );
}

export default App;