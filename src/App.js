import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Other from './components/Other';

function App() {
    return (
        <BrowserRouter>
            <div className="w-50 m-auto mt-3 mb-3 p-3 card">
                {/* <Link to={"/home"}>Go Home</Link> */}
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/:word" element={<Other />} />
                    <Route path="/:number" element={<Other />} />
                    <Route path="/:wordTextCol/:textColor" element={<Other />} />
                    <Route path="/:wordBgColor/:textColor/:bgColor" element={<Other />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
