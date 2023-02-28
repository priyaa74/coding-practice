import ProgressBar from './components/ProgressBar';
import './App.css';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';
import Container from './InfiniteScroll/Container';

function App() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <div className="App">
      <ProgressBar/>
      <Stopwatch/>
      <Timer targetDate={dateTimeAfterThreeDays} />
      <Container/>
    </div>
  );
}

export default App;
