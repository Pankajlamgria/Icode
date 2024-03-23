import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IcodeState from './context/IcodeState';
import Home from './content/Home.js';
import Code from './content/Code.js';
{
  <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

}
function App() {
  return (
    <div className="App">
      <IcodeState>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/code" element={<Code/>}/>
          </Routes>
        </Router>
      </IcodeState>
    </div>
  );
}

export default App;
