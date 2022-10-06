import './App.css';
import  { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <BrowserRouter> 
      <Header />
      <Content />
      <Footer />
    </ BrowserRouter>
)}

export default App;
