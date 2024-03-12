import classes from "./RightSide.module.css"

export default function RightSide(){
    return<div className={classes.container}>
        <div className={classes.followCard}>
            <div className={classes.title}>
                <h2>Add to your feed</h2>
                <img src="/Images/feed-icon.svg" alt=""></img>
            </div>

            <div className={classes.feedList}>
                <li>
                    <a>
                        <div className={classes.avatar}></div>
                    </a>
                    <div>
                        <span>
                            LinkedIn
                        </span>
                        <button>
                            Follow
                        </button>
                    </div>
                </li>
                <li>
                    <a>
                        <div className={classes.avatar}>

                        </div>
                    </a>
                    <div>
                        <span>#Video</span>
                        <button>Follow</button>
                    </div>
                </li>
            </div>
            <div className={classes.recommendation}>
                view all recommendations
                <img src="/Images/right-icon.svg" alt=" "></img>
            </div>
        </div>
        <div className={classes.bannerCard}>
            <img src="https://static-exp1.licdn.com/scds/common/u/images/promo"></img>
        </div>
    </div>
}