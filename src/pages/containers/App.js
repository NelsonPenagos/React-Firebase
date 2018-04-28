import React, { Component } from 'react';
import firebase from 'firebase';
import HomeLayout from '../component/home-layout';
import config from '../../config/setupFirebase';
class App extends Component {

  state = {
    user : null,
    infoPage : false
  }
  renderLoginButton() {
    if (this.state.user) {
      return (
        <div>
          <img src={this.state.user.photoURL} alt={this.state.user.displayName}/>
          Hola {this.state.user.displayName}!
          <button onClick={this.handleLogout}>Salir</button>
        </div>
      )        
    }else {
      return (
          <a className="button" onClick={this.handleAuth}>
            <span className="icon">
              <i className="fab fa-google"></i>
            </span>
            <span>Login con Google</span>
          </a>      
      )       
    }
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

export default App;
