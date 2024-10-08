import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import { buildTransform } from "framer-motion";
import CountUp from "react-countup";
const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-cirle" />
                        <h1>
                            Discover
                            <br /> Most Suitable <br />
                            Property
                        </h1>
                    </div>
                    <div className="flexColStart hero-des">
                        <span className="secondaryText">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit.
                        </span>
                        <span className="secondaryText">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit.
                        </span>
                    </div>
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">
                                Premium Property
                            </span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">
                                Happy Customer
                            </span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={28} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">
                                Awards Winnings
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="hero-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
