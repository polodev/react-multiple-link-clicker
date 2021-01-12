import logo from './logo.svg';
import './App.css';
import links from './data/links';
import LinkCard from './components/LinkCard';
import LinkClicker from './components/LinkClicker';

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <h2>Linking</h2>
        <LinkClicker links={links} />
        {
          links.map((link, index) => <LinkCard key={index} link={link} />)
        }
      </div>
    </div>
  );
}

export default App;
