import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import NavBar from './components/NavBar';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
