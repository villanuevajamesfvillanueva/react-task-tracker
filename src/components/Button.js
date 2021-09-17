import PropTypes from 'prop-types';
const Button = ({ bgColor, text }) => {
    return (
        <button style={{ backgroundColor: bgColor }} className='btn'>
            {text}
        </button>
    )
}

Button.defaultProps = {
    bgColor: 'black',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button
