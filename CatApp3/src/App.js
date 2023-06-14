import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";
setInterval(() => {
import('./components/Navigation').then(module =>{})}, 100)

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename="/CatShot">
          <Route
            render={props => (
              <Header
                handleSubmit={this.handleSubmit}
                history={props.history}
              />
            )}
          />
          <div className="container">
            <Navigation />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/random" />}
              />
              <Route path="/random" render={() => <Item searchTerm="random" />}/>
              <Route path={`/search/${module.randomTag1}`} render={() => <Item searchTerm= {module.randomTag1} />} />
              <Route path={`/search/${module.randomTag2}`} render={() => <Item searchTerm= {module.randomTag2} />} />
              <Route path={`/search/${module.randomTag3}`} render={() => <Item searchTerm= {module.randomTag3} />} />
              <Route path={`/search/${module.randomTag4}`} render={() => <Item searchTerm= {module.randomTag4} />} />
              <Route
                path="/search/:searchInput"
                render={props => (
                  <Search searchTerm={props.match.params.searchInput} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    );
  }
}

export default App;
