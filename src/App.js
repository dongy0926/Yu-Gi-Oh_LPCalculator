import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './page/Calculator/Calculator';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/cal" element={<Calculator/>}/>
        </Routes>
    </div>
  );
}

export default App;
