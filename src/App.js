import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Contacts from './components/Contacts/Contacts'
import AddContact from './components/Contacts/AddContact'
import EditContact from './components/Contacts/EditContact'
import Header from './components/Layout/Header'
import About from './components/Pages/About'
import NotFound from './components/Pages/NotFound'

import {Provider} from './context';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    // Wrap the whole application in the provider so we can access it
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager"/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}/>
              <Route exact path="/contact/add" component={AddContact}/>
              <Route exact path="/contact/edit/:id" component={EditContact}/>
              <Route exact path="/about" component={About}/>
              <Route component={NotFound}/>
            </Switch>  
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
