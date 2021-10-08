import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import { BrowserRouter,Switch ,Route} from 'react-router-dom';
import Detail from './components/Detail';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
      <Switch>
          <Route path = "/" exact>
            <Home></Home>
          </Route>
          <Route path = "/add" >
            <Add></Add>
          </Route>
          <Route path = "/edit/:id" >
            <Edit></Edit>
          </Route>
           <Route path = "/detail/:id" >
            <Detail></Detail>
          </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
