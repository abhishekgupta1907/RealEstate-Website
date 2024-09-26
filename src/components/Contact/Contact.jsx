import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
const Contact = () => {
    return (
        <section className="contact-wrapper">
            <div className="paddings innerWidth flexCenter contact-container">
                <div className=" flexColStart c-left">
                    <span className="orangeText">Our Contact Us</span>
                    <span className="primaryText">Easy to Contact Us</span>
                    <span className="secondaryText">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Rerum esse optio, ratione natus reiciendis sequi
                        veritatis expedita suscipit perferendis quam.
                    </span>
                    <div className="flexColStart contactModes">
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>

                                    <div className="flexColStart detail">
                                        <span className="primaryText">
                                            call
                                        </span>
                                        <span className="secondaryText">
                                            987-564-2310
                                        </span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Call Now
                                </div>
                            </div>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>

                                    <div className="flexColStart detail">
                                        <span className="primaryText">
                                            Chat
                                        </span>
                                        <span className="secondaryText">
                                            987-564-2310
                                        </span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Chat Now
                                </div>
                            </div>
                        </div>
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>

                                    <div className="flexColStart detail">
                                        <span className="primaryText">
                                            Video call
                                        </span>
                                        <span className="secondaryText">
                                            987-564-2310
                                        </span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Video Call Now
                                </div>
                            </div>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenterText
                                            size={25}
                                        />
                                    </div>

                                    <div className="flexColStart detail">
                                        <span className="primaryText">
                                            Message
                                        </span>
                                        <span className="secondaryText">
                                            987-564-2310
                                        </span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Message Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="contact" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
