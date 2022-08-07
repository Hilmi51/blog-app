import "./App.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub, faInstagram, faLinkedin, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

function App() {

    return (
        <main className="container">
            <section className="profile">
                <img src={require('./images/IMG_20211121_112507.jpg')} alt="my profile photo"/>
                <div className="profile-text">
                    <h1>HILMI SAFAK</h1>
                    <h4><span>FULL-STACK DEVELOPER</span></h4>
                    <p className="icons">
                        <a href="https://www.instagram.com/hilmi_safak/" target="_blank" className="i ai">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                        <a href="https://twitter.com/Hilmi511" target="_blank" className="i ai">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        <a href="https://www.linkedin.com/in/hilmi-%C5%9Fafak-40046a210/" target="_blank"
                           className="i ai">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                        <a href="https://github.com/Hilmi51" target="_blank" className="i ai">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <a href="https://www.youtube.com/channel/UClQQsXPjHynuY4A7X18eNKw" target="_blank"
                           className="i ai">
                            <FontAwesomeIcon icon={faYoutube}/>
                        </a>
                        <a href="https://discord.gg/uJ3QJFjq5B" target="_blank" className="ai">
                            <FontAwesomeIcon icon={faDiscord}/>
                        </a>
                    </p>
                    <div className="hire-me">
                        <button
                            className="text-white font-bold py-2 px-4 rounded-full"
                            onClick={() => window.location = 'mailto:hilmisafak.info@gmail.com'}
                            target="_blank"
                        >
                            Contact Now
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
