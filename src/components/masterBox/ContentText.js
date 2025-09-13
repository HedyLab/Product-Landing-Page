import React from 'react'
import PropTypes from 'prop-types'


/**
 * @param { String } title string
 * @param { String } color oneOf_'black','primary', 'white', 'secondary','alert','tertiary', 'grayscale','black_tertiary','black_dark900'
 * @param { String } size oneOf_'small','normal','medium','large'
 * @param { Element,String } customStyles oneOfType([PropTypes.string, PropTypes.object]),
 * @param { Func } onClick func
 */

function ContentText({name, title, color,size , customStyles, onClick }) {
    const isTailwind = typeof customStyles === 'string'
    return (
            <div name={name} className={`contentText contentText-${color} contentText-${size} ${isTailwind && customStyles} `} style={!isTailwind ? { ...customStyles } : {}} onClick={onClick}>
                {title}
            </div>
    )

}

ContentText.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.oneOf(['black','primary', 'white', 'secondary','alert','tertiary', 'grayscale','black_tertiary','black_dark900']),
    size: PropTypes.oneOf(['small','normal','medium','large']),
    customStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]), 
    onClick: PropTypes.func,
}

ContentText.defaultProps = {
    title: ' ',
    name: null,
    color: 'black',
    size: 'normal',
    customStyles: null,
    onClick: null,
}

export default ContentText
