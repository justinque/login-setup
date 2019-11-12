import React from 'react';
import Navi from '../mainFiles/navbar';
import IntroTitle from '../mainFiles/introTitle';


export default class IntroPage extends React.Component {
    render(){
        return(
            <div>
            <div className='NavArea'>
          <Navi/>
      </div>
      <div className='container'>
          <IntroTitle/>
      </div>
      
         </div>
        )
    }
}