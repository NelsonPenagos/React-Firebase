import React, { PureComponent } from 'react';
import firebase from 'firebase';
import HomeLayout from '../component/home-layout';
class Home extends PureComponent {

  state = {
    user : null,
    infoPage : false
  }

  handleAuth = (info) => {
    this.setState({
      infoPage: true
    })   
    const provider = new firebase.auth.GoogleAuthProvider();   
    firebase.auth().signInWithPopup(provider)
      .then(result => {       
        console.log("Correo: " + result.user.email)
        
      })
      .catch(error => console.log("Error: " + error.code))
  }

  handleLogout = (info) => {
    this.setState({
      infoPage: false
    }) 
    firebase.auth().signOut()
      .then(result => console.log("Saliendo de sesion: " + result.user.email))
      .catch(error => console.log("Error: " + error.code))
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      this.setState({user})  
    })
  }
  render() {
    return (
      <HomeLayout>
      </HomeLayout>
    )
  }
}

export default Home;
