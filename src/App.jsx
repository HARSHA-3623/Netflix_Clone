import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Feed from './pages/Feed';
import Movie from './pages/Movie';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/:slug" element={<Movie />} />
            </Routes>
        </Router>
    );
}

export default App;