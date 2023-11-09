import {UNILINGO_LOGO} from '../../Constants/Constants.jsx';
import './NavBar.scss';

const NavBar = () => {
    return(
        <>
            <header className = 'nav'>
                <div className = 'logo__searchbar'>
                    <img className = 'unilingo__logo' src = {UNILINGO_LOGO} alt = 'unilingo Logo'/>
                </div>
                <div className = 'div__links'>
                    <h3>Agregar navegación!</h3>
                </div>
            </header>
        </>
    );
};
export default NavBar;
