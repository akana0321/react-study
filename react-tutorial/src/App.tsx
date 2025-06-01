import './App.css'
import { Gallery, Profile } from './components/Gallery';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <Gallery />
      <Profile />
    </div>
  );
}

export default App;