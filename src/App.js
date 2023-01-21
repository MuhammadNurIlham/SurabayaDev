import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './TimeLine.css';
import './utils/TimeLine.css'

// Component
import ParallaxPage1 from './components/ParallaxPage1';
import ParallaxPage2 from './components/ParallaxPage2';
import ParallaxPage3 from './components/ParallaxPage3';
import ParallaxPage4 from './components/ParallaxPage4';
import ParallaxPage5 from './components/ParallaxPage5';
import ParallaxPage6 from './components/ParallaxPage6';

function App() {
  return (
    <div className="App">
      <ParallaxPage1 />
      <ParallaxPage2 />
      <ParallaxPage3 />
      <ParallaxPage4 />
      <ParallaxPage5 />
      <ParallaxPage6 />
    </div>
  );
}

export default App;
