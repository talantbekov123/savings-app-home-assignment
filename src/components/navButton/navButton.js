import './navButton.css';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function navButton() {
    return (
        <div className='navButton'>
            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
            <div className='title'>
                Let’s plan your saving goal
            </div>
        </div>
    );
}

export default navButton;
