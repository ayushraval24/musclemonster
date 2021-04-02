import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Services from './Components/Services.jsx'
import Offers from './Components/Offers.jsx';
import Contact from './Components/Contact.jsx';
import About from './Components/About.jsx';

function App() {
  return (
    <div className="">

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/offers" component={Offers} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
