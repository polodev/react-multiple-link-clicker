import logo from './logo.svg';
import './App.css';
import links from './data/links';
import LinkTab from './components/LinkTab'
import LinkTabs from './components/LinkTabs'

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <LinkTabs></LinkTabs>
      </div>
    </div>
  );
}

export default App;
