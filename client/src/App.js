import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Collection from './components/Collection';
import German from './components/German';
import Russian from './components/Russian';
import Japanese from './components/Japanese';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route path='/collection' component={Collection}/>
          <Route path='/german' component={German}/>
          <Route path='/russian' component={Russian}/>
          <Route path='/japanese' component={Japanese}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
