import React from 'react';

class NavBarLogin extends PureComponent {
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