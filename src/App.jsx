import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feature from "./pages/Feature";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/feature" element={<Feature />} />
            </Routes>
        </Router>
    );
}
