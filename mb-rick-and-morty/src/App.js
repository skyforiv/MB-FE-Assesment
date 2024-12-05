import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Body from './pages/Body';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Body/>
      </BrowserRouter>
    </div>
  );
}

export default App;
