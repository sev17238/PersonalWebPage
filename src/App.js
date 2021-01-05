import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import MainContainer from './containers/MainContainer';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Layout>
          <MainContainer/>
        </Layout>
      </div>
    );
  }
}

export default App;
