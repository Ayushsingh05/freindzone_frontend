
import './App.css';
import { Navbar } from './Components/Navbar';
import { Posts } from './Components/Posts';
import { Recommondation } from './Components/Recommondation';
import { Status } from './Components/Status';
import './Components/Style.css'
function App() {
  return (
    <div className="App">
      <Navbar/>
    
    <Status/>
      <Posts/>
    
  
      <Recommondation/>
      
    </div>
  );
}

export default App;
