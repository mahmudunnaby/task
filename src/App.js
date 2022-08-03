import logo from './logo.svg';
import './App.css';
import Products from './components/Products/Products';
import Search from './components/Search/Search';


function App() {
  return (
    <div className="App">
      <Search></Search>
      <Products></Products>

    </div>
  );
}

export default App;
