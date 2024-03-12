import classes from "./Main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";

export default function Main() {
  return (
    <div className={classes.container}>
      <div className={classes.shareBox}>
        <div className={classes.ans}>
          <img src="/Images/user.svg" alt=""></img>
          <button>Start a Post</button>
        </div>
        <div>
          <button>
            <img src="/Images/photo-icon.svg" alt=""></img>
            <span>Photo</span>
          </button>
          <button>
            <img src="/Images/video-icon.svg" alt=""></img>
            <span>Video</span>
          </button>
          <button>
            <img src="/Images/event-icon.svg" alt=""></img>
            <span>Events</span>
          </button>
          <button>
            <img src="/Images/article-icon.svg" alt=""></img>
            <span>Write article</span>
          </button>
        </div>
      </div>
      <div>
        <div className={classes.article}>
          <div className={classes.sharedActor}>
            <a>
              <img src="/Images/user.svg" alt=""></img>
              <div>
                <spam>Title</spam>
                <spam>Info</spam>
                <spam>Date</spam>
              </div>
            </a>
            <button>
              <img src="/Images/"></img>
            </button>
          </div>
          <div className={classes.description}>Decription</div>
          <div className={classes.sharedImg}>
            <a>
              <img src="/Images/shared-image.jpg" alt=""></img>
            </a>
          </div>
          <div className={classes.socialCounts}>
            <li>
              <button>
                <FontAwesomeIcon icon={faThumbsUp} />
                <FontAwesomeIcon icon={faThumbsUp} />
                <span>75</span>
              </button>
            </li>
            <li>
              <a>2 Comments</a>
            </li>
          </div>
          <div className={classes.socialActions}>
            <button>
              <img src="/Images/user.svg" alt=""></img>
              <span>Likes</span>
            </button>
            <button>
              <img src="/Images/user.svg" alt=""></img>
              <span>Comments</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
