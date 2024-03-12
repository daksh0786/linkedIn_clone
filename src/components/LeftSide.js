import classes from "./LeftSide.module.css";

export default function LeftSide() {
  return (
    <section className={classes.container}>
      <div className={classes.artCard}>
        <div className={classes.userInfo}>
          <div className={classes.CardBackground}></div>
          <a>
            <div className={classes.photo}></div>
            <div className={classes.link}>Welcome, there!</div>
          </a>
          <a href="/">
            <div className={classes.addPhotoText}>Add a photo</div>
          </a>
        </div>
        <div className={classes.widget}>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow you network</span>
            </div>
            <img src="Images/widget-icon.svg" alt=""></img>
          </a>
        </div>
        <div className={classes.items}>
          <span>
            <img src="Images/item-icon.svg" alt=" "></img>
            My items
          </span>
        </div>
      </div>
      <div className={classes.communityCard}>
        <a>
          <span>
            Groups
          </span>
        </a>
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt=" "></img>
          </span>
        </a>
        <a>
          <span>follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </div>
    </section>
  );
}
