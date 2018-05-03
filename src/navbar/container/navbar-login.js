import React, { Component } from 'react';
import Button from '../../utilities/component/button';
import { PROVIDER_FIREBASE, AUTH_FIREBASE } from '../../api/firebase';

class NavBarLogin extends Component {

  state = {
    user : null
  }
  handleLogin = (info) => {   
    const provider = PROVIDER_FIREBASE;   
    AUTH_FIREBASE.signInWithPopup(provider)
    .then(result => {       
        console.log("Correo: " + result.user.email)            
    })
    .catch(error => console.log("Error: " + error.code))
  }

  handleLogout = (info) => {
    AUTH_FIREBASE.signOut()
      .then(result => console.log("Saliendo de sesion"))
      .catch(error => console.log("Error: " + error.code))
  }

  componentWillMount(){
    AUTH_FIREBASE.onAuthStateChanged(user => {
      this.setState({user})  
    })
  }
  render(){

    return(
      <nav className="navbar is-info">
        <div className="navbar-brand">
          <a className="navbar-item" href="">
            <h1 className="App-title">LOGO</h1>
          </a>
        </div>
        <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
              {
                this.state.user ?
                <div>
                  <img src={this.state.user.photoURL} alt={this.state.user.displayName}/>
                  Hola {this.state.user.displayName}!
                  <Button 
                    handleAuth={this.handleLogout}
                    title="Salir"
                  />
                </div>
                : 
                <Button 
                  handleAuth={this.handleLogin}
                  title="Login con Google" 
                />                    
              }                                      
              </div>
            </div>
        </div>
      </nav>
    )
  }  
}

export default NavBarLogin;