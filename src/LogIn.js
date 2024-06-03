import React from "react";

function LogIn(props) {
  return (
    <>
      <div id="login">
        <h1>Welcome to Jammming</h1>
        <br />
        <br />
        <h3>Please log in with Spotify to continue </h3>
        <button id="login-button" onClick={props.handleClick}>
          {" "}
          Log in{" "}
        </button>
      </div>
    </>
  );
}

export default LogIn;
