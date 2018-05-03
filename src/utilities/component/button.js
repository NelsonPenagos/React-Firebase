import React from 'react';

function Button(props){
    return(
        <a className="button" onClick={props.handleAuth}>
            <span className="icon">
              <i className="fab fa-google"></i>
            </span>
            <span>{props.title}</span>
        </a> 
    )
}

export default Button;