import TitleBar from './TitleBar.js';
import Quiz from './Quiz.js';
import './buzzfeed-logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleBar />
        <Quiz />
      </header>
    </div>
  );
}

export default App;
