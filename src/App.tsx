import Etkinlik from './components/Etkinlik';
import { activites } from './data/data';



function App() {
  return (
    <div className="App">
      <Etkinlik activites={activites} />
    </div>
  );
}

export default App;
