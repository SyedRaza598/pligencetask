import Home from './components/home'
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}
library.add(fab, faCheckSquare, faCoffee)
export default App;
