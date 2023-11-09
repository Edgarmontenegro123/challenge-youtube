import {UNILINGO_LOGO} from '../../Constants/Constants.jsx';
import './Navbar.scss';
import ShowVisitCounter from "../ShowVisitCounter/ShowVisitCounter.jsx";

const NavBar = () => {
    return(
        <>
            <header className = 'nav'>
                <div className = 'logo__searchbar'>
                    <img className = 'unilingo__logo' src = {UNILINGO_LOGO} alt = 'unilingo Logo'/>
                </div>
                <div className = 'div__counter'>
                    <ShowVisitCounter classname = 'showVisitCounter'/>
                </div>
            </header>
        </>
    );
};
export default NavBar;
