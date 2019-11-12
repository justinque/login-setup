import React from 'react';
import IntroPage from './components/pages/intro';
import './App.css';
import Login from './components/buttons/loginbtn';

export default class App extends React.Component {
  render() {
    return(
     <div>
        <div className='PageOne'>
      <IntroPage/>
     
  </div>
  
     </div>
    )
  }
}