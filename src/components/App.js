import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { directive } from '@babel/types';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
 

  componentToRender(component) {
    switch (component) {
      case 'start':
        return <PlayArea />;
      default:
        return <Menu />;
    }
  }

  render() {
    return (
      <div>
        {this.componentToRender(this.state.display)}
      </div>
    );
  }
}

export default App;
