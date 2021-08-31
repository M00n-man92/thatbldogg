import Login from './pages/login/Login';
import Topbar from './components/topbar/Topbar'
import Setting from './pages/setting/Setting';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Singles from './pages/singles/Singles';
import { BrowserRouter as Router, Route, Link,  Switch } from "react-router-dom";
function App() {
  return (
    <Router>
   <Switch>
  <Route path="/register">
<Register/>
  </Route>
  <Route exact path="/">
    <Home/>
  </Route>
  <Route exact path="/setting">
    <Setting/>
  </Route>
  <Route exact path="/blog">
    <Blog/>
  </Route>
  <Route exact path="/login">
    <Login/>
  </Route>
  <Route exact path="/posts/:id">
    <Singles/>
  </Route>
  </Switch>
    </Router>
  );
}

export default App;
