import './App.css';  
import Halo from './Halo';  
import React , {Component} from 'react';
// import element Alert yang telah dibuat  
  
class App extends Component {  
  render(){  
  return (  
          <div className="App container col-sm-6">  
         <Halo></Halo>
          </div>  
        );  
  }  
}  
  
export default App;  