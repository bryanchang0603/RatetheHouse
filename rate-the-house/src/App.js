import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
    <Route exact path="/">
      <Redirect to="/init" />
    </Route>
    <div>
      <Navbar className="navbar navbar-default">
        <ul className="nav navbar-nav">
          <li><NavLink className="nav-link" exact to="/init">init</NavLink></li>
          <li><NavLink className="nav-link" exact to="/specificAdd">specificAdd</NavLink></li>
          <li><NavLink className="nav-link" exact to="/findTenant">findTenant</NavLink></li>
        </ul>
      </Navbar>



      <Route path="/init" component={Home} />
      <Route path="/specificAdd" render={(props) => <LiveFeed posts={this.state.posts} {...props} />} />
      <Route path="/findTenant" render={(props) => <Analytics posts={this.state.posts} {...props} />} />
    </div>
  </Router>
  );
}

export default App;
