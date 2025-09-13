import React from 'react'
import PropTypes from 'prop-types'

/**
 * Primary UI component for user interaction
 * 
 * @param { String } title string
 * @param { String } color oneOf_'black','primary', 'white', 'secondary','alert','tertiary', 'grayscale'
 * @param { String } size oneOf_'small','normal','medium','large'
 * @param { Element,String } customStyles oneOfType([PropTypes.string, PropTypes.object]),
 *
 */

function Headline({ title, color ,size, customStyles, onClick }) {

    const isTailwind = typeof customStyles === 'string';

    return (
            <div className={`headline headline-${color} headline-${size} ${isTailwind && customStyles} `} style={!isTailwind ? { ...customStyles } : {}} onClick={onClick}>
                {title}
            </div>
    );

};

Headline.propTypes = {
    title: PropTypes.string,
    color: PropTypes.oneOf(['black','primary', 'white', 'secondary','alert','tertiary', 'grayscale']),
    size: PropTypes.oneOf(['small','normal','normal-xl','tablet','laptop','medium','large']),
    customStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]), 
    onClick: PropTypes.func,
}

Headline.defaultProps = {
    title: 'Headline',
    color: 'black',
    size:'normal',
    customStyles: null,
    onClick: null,
}

export default Headline;
