import React from "react";

function mensaje(props){
    return(
        <div className="message" >
        {props.tweet}
      </div>
    )
}

export default mensaje;

