import React from 'react';
import {render} from 'react-dom';
import Label from './components/Label.jsx';


class App extends React.Component {
  
  render () {
    return (<Label/>);
  }
}

if(typeof window !== 'undefined') {
  render(<App/>, document.getElementById('app'));
}

