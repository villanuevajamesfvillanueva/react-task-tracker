import PropTypes from 'prop-types'
import React from "react";

const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
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
