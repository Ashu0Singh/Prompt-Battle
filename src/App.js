import Homepage from './components/Home/Homepage'
import Poll from './components/Polling/Poll';
import Login from './components/Login/Login'
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom'

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route exact path="/Prompt-Battle/" element={<Homepage />} />
        <Route exact path="/Prompt-Battle/Homepage" element={<Homepage />} />
        <Route exact path="/Prompt-Battle/Polling" element={<Poll />} />
        <Route exact path="/Prompt-Battle/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
