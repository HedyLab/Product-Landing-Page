import React from 'react';
import PropTypes from 'prop-types';


/**
 * 
 * @param { element } startElement element
 * @param { element } endElement element
 * @param { element } customStyles element
 * @param { Function } onClick Func
 * @param { String } customStyles oneOf_ String,Object
 */
function ListItem({ children, startElement, endElement, customStyles, onClick, errorText }) {

  const isTailwind = typeof customStyles === 'string';

  return (
    <li className={` list-item`}onClick={onClick}>
      <div className={`list-item-content  ${isTailwind && customStyles} `} style={!isTailwind ? { ...customStyles } : {}} >
        {startElement}
        {children}
        {endElement}
      </div>
    </li>
  );
};

ListItem.propTypes = {
  startElement: PropTypes.element,
  endElement: PropTypes.element,
  customStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
  errorText: PropTypes.string,
}


ListItem.defaultProps = {
  startElement: null,
  endElement: null,
  customStyles: null,
  onClick: null,
  errorText: null,
}

export default ListItem