import Header from "./Header";
import classes from "./Home.module.css";
import LeftSide from "./LeftSide";
import Main from "./Main";
import RightSide from "./RightSide";

export default function Home() {
  return (
    <div>
      <Header />
      <section className={classes.container}>
        <div className={classes.divi}>
          <h5>
            <a>Hiring ina hurry? - </a>
          </h5>
          <p>
            Find talented pros in record time with upwork and keep business
            moving.
          </p>
        </div>
        <section className={classes.slides}>
            <LeftSide/>
            <Main/>
            <RightSide />
        </section>
      </section>   
    </div>
  );
}
