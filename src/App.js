import React, { Component } from 'react';

import Footer from './footer';
import Header from './header';
import Main from './main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

// <h2>Register Now</h2>
// <form>
//   <input type="text" placeholder="First Name" />
//   <input type="text" placeholder="Last Name" />
//   <input type="text" placeholder="Ward or Branch" />
// </form>
