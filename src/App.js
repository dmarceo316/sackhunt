import React, {Component} from 'react';
import { ConfigureStore } from './components/redux/configureStore';
import { Provider } from 'react-redux';
import Main from './components/Main';
import './App.css';

const store = ConfigureStore()

class App extends Component {
  render(){
    return (
        <Provider store={store}>
          <div className="App">
            <Main/>
          </div>
        </Provider>
    );
  }
}
export default App;
