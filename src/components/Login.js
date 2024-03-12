import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import classes from "./Login.module.css";
import {connect} from "react-redux";
import {signInAPI} from "../actions/index"
import {Navigate } from "react-router-dom";

const Login = (props) => {
  return (
    <div>
      {props.user && <Navigate to="/home"/>}
      <nav className={classes.ima}>
        <a href=" ">
          <img src="/Images/login-logo.svg" alt=" "></img>
        </a>
        <div>
          <h1>Join Now</h1>
          <h1>Sign in</h1>
        </div>
      </nav>
      <section className={classes.section}>
        <div>
          <h1>Welcome to your professional community</h1>
          <img src="/Images/login-hero.svg" alt=" "></img>
          {/* </div> */}
          <button style={{ float: "left-10px", cursor: "pointer" }} onClick = {() => props.signIn()}>
            {/* <div> */}
            <FontAwesomeIcon
              icon={faGoogle}
              style={{ color: "#ca6412", marginRight: "5px" }}
            />
            Sign in with Google
            {/* </div> */}
          </button>
        </div>
      </section>
    </div>
  );
}; 

const mapStateToProps = (state) =>{
  return {
    user:state.userState.user,
  };
}

const mapDispatchToProps = (dispatch) =>({
  
     signIn: () => dispatch(signInAPI())
  
});



export default connect(mapStateToProps, mapDispatchToProps)(Login);
