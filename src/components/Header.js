import PropTypes from 'prop-types';
import Button from './Button';
import { FaTimes } from 'react-icons/fa';

const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'white' } bgColor={showAdd ? 'white' : 'black'} text={showAdd ? <FaTimes /> : 'Add' } onClick={onAdd}/>
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headerStyle = {
//     color: 'red',
//     backgroundColor: 'green',
// }

export default Header
