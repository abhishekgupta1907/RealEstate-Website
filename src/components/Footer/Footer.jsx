import "./Footer.css";

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="footer-logo" width={120} />
                    <span className="secondaryText">
                        Lorem, ipsum dolor sit amet consectetur <br />
                        adipisicing elit. Perferendis, cupiditate.
                    </span>
                </div>
                <div className="flexColStart f-right">
                    <span className="primaryText">Information</span>
                    <span className="secondaryText">New york city Usa</span>

                    <div className="flexCenter f-menu">
                        <span>About Us</span>
                        <span>Services</span>
                        <span>Contact Us</span>
                        <span>Terms & Conditions</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
