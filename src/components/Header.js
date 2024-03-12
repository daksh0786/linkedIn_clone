import { connect } from "react-redux";
import classes from "./Header.module.css";
import { signOutAPI } from "../actions";

// Import your search icon SVG file
// import searchIcon from 'public/Images/search-icon.svg'
export function Header(props) {
  return (
    <>
      <div className={classes.container}>
        <div>
          <nav>
            <a href="./home">
              <img src="Images/home-logo.svg" alt=""></img>
            </a>
          </nav>
          <nav>
            <div className={classes.searchContainer}>
              <img
                src="Images/search-icon.svg"
                alt="Search"
                className={classes.searchIcon}
              />
              <input
                type="text"
                placeholder="Search"
                className={classes.searchInput}
                style={{
                  paddingLeft: "30px",
                  fill: "currentcolor",
                  width: "200px",
                  height: "27px",
                }}
              ></input>
            </div>
          </nav>
          <spam>
            <div>
              <a href="/home" className={classes.active}>
                <img src="/Images/nav-home.svg" alt=""></img>
                <span>Home</span>
              </a>
              <a href="/home">
                <img src="/Images/nav-network.svg" alt=""></img>
                <span>My Network</span>
              </a>
              <a href="/home">
                <img src="/Images/nav-jobs.svg" alt=""></img>
                <span>Jobs</span>
              </a>
              <a href="/home">
                <img src="/Images/nav-messaging.svg" alt=""></img>
                <span>Messaging</span>
              </a>
              <a href="/home">
                <img src="/Images/nav-notifications.svg" alt=""></img>
                <span>Notification</span>
              </a>
              <a href="/">
                <img
                  src="/Images/user.svg"
                  alt=""
                  style={{ borderRadius: "10px" }}
                ></img>
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "",
                  }}
                >
                  <span>Me</span>
                  <img
                    src="/Images/down-icon.svg"
                    alt=""
                    style={{ width: "15px" }}
                  ></img>
                </div>
              </a>

              <a href="/">
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL||""} alt="" />
                ) : (
                  <img src="/Images/nav-work.svg" alt="" />
                )}
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "",
                  }}
                  onClick={()=>props.SignOUT()}
                >
                  <span>
                    Me
                    <img
                      src="/Images/down-icon.svg"
                      alt=""
                      style={{ width: "15px" }}
                    ></img>
                  </span>
                </div>
              </a>
            </div>
          </spam>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state)=>{
  console.log(state)
  return ({
    user:state.userState.user, 
  }); 
}

const mapDispatchToProps = (dispatch) =>({

    SignOUT: dispatch(signOutAPI())
})

export default connect(mapDispatchToProps,mapStateToProps)(Header);