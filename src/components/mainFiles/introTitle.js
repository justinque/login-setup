import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogMeIn from '../buttons/loginbtn';
import Signin from '../buttons/signup';
import './titleStyle.css';



const mainPosition ={ 
  float: 'right'
}
const titleStyle ={ 
  border: 'solid black',
  textAlign: 'center'
}
const buttonStyle ={
  textAlign: 'center'
}

export default class IntroTitle extends React.Component {
    render() {
        return (
           <div  style={mainPosition} >
             <div  >
             <Jumbotron fluid>
  <Container>
  <h1 style={titleStyle}>Who is BMC</h1>
  <Card body>This is some text within a card body.</Card>
 
  </Container>
 
</Jumbotron>
<div style={buttonStyle}>
<LogMeIn/>
</div>
<br/>
<div style={buttonStyle}>
<Signin/>
</div>

             </div>
         
           </div>
        )
    }
}