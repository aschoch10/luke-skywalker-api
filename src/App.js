import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import SearchBar from './components/SearchBar';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <SearchBar />
        <Switch>
          <Route exact path='/:category/:id'>
            <Detail />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
