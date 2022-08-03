import logo from './logo.svg';
import './App.css';
import Products from './components/Products/Products';
import Search from './components/Search/Search';
import Modalw from './components/Products/Modalw';

function App() {
  return (
    <div className="App">
      <Search></Search>
      <Products></Products>
      <Modalw></Modalw>
    </div>
  );
}

export default App;
