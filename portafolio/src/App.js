import './App.css';
import Error404 from './pages/Error404';
import Perros from './pages/Perros';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Portafolio from './pages/Portafolio';
function App() {
  return (
  <Router>

<Switch>

<Route path="/home">

<Home />

</Route>
<Route path="/portafolio">
<Portafolio/>
</Route>

<Route path="/perros">
  <Perros/>
</Route>
<Route component={Error404}/>

</Switch>

  </Router>
  
    );
}

export default App;
