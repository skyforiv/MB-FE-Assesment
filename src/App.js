import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Body from './pages/Body';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Body/>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
