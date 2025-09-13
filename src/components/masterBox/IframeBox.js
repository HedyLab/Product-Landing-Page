import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
function IframeBox({ src, customStyles, onClick }) {
    const isTailwind = typeof customStyles === 'string';

    return (
        <div className={`iframeBox  ${isTailwind && customStyles} `} style={!isTailwind ? { ...customStyles } : {}} onClick={onClick}>

            <iframe
                frameBorder={0}
                title=''
                src={`${src}`}
                allowfullScreen
            // scrolling="no"
            ></iframe>
        </div>
    );
};

IframeBox.propTypes = {
    src: PropTypes.string.isRequired,
    customStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onClick: PropTypes.func,
}

IframeBox.defaultProps = {
    src: '',
    customStyles: null,
    onClick: null,
}

export default IframeBox