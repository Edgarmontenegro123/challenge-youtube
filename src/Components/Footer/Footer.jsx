import './Footer.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeartbeat} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const date = new Date().getFullYear();
    return(
        <div className = 'footer'>
            Made with <FontAwesomeIcon icon={faHeartbeat} /> by Edgar Montenegro!
            <br/>
            All rights reserved &copy; {date}
        </div>
    );
};
export default Footer;
