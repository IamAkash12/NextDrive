import './App.css';
import Content from './components/Content';
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
    </div>
  );
}

export default App;
