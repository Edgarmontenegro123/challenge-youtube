import {YOUTUBE_LOGO} from '../../Constants/Constants.jsx';
import './Navbar.scss';
import ShowVisitCounter from "../ShowVisitCounter/ShowVisitCounter.jsx";

const NavBar = () => {
    return(
        <>
            <header className = 'nav'>
                <div className = 'logo__searchbar'>
                    <img className = 'youtube__logo' src = {YOUTUBE_LOGO} alt = 'Youtube Logo'/>
                </div>
                <div className = 'div__counter'>
                    <ShowVisitCounter classname = 'showVisitCounter'/>
                </div>
            </header>
        </>
    );
};
export default NavBar;
