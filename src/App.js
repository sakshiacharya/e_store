import './App.css';
import { DetailPage } from './components/DetailPage';
import { Home } from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
