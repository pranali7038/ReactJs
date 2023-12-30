import logo from './logo.svg';
import React,{PureComponent} from 'react';
import './App.css';

class PureComponentProps extends React.PureComponent{

  render()
  {
    return(
      <div className='App'>
        <h1>User Componenet {this.props.count}</h1>
        
      </div>
    )
  }
}








export default PureComponentProps;

