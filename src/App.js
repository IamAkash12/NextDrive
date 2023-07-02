import './App.css';
import Content from './components/Content';
import Features from './components/Features';
import Footer from './components/Footer';
import Mission from './components/Mission';
import Navbar from './components/Navbar';
import Working from './components/Working';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
      <Mission/>
      <Working/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;
