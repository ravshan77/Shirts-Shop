import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header'
import Routes from './routes/routes'
import DataProvider from './store/Context'


class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Routes />
            <Footer />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
