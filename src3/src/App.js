import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Ball from './components/Ball/Ball';
import Slideshow from './components/Slideshow/Slideshow';

function App() {
  return (
    <div className="App">
          <Header />
          <Ball />
          <Content />
          {/* <Slideshow /> */}
    </div>
  );
}

export default App;
