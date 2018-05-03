import React from 'react';

class NavBarLogin extends PureComponent {

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
  render(){
    return(
      <nav className="navbar is-info">
        <div className="navbar-brand">
          <a className="navbar-item" href="">
            <h1 className="App-title">props.title</h1>
          </a>
        </div>
        <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">                           
                {this.renderLoginButton()}                  
              </div>
            </div>
        </div>
      </nav>
    )
  }  
}

export default NavBarLogin;