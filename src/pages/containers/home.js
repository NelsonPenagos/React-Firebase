import React, { Component } from 'react';
import HomeLayout from '../component/home-layout';
import NavBar from '../../navbar/container/navbar-login';
class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <NavBar title="Logo"/>
      </HomeLayout>
    )
  }
}

export default Home;
