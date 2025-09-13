import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @param { String } startElement element
 * @param { Element } endElement element
 * @param { String } title string
 * @param { String } id string
 * @param { Bool } variant oneOf_'text', 'contained', 'outlined'
 * @param { String } color oneOf_'primary', 'secondary', 'tertiary','quaternary','alert']),
 * @param { String } rounded oneOf_'none','small', 'normal', 'large'
 * @param { Element,String } customStyles oneOfType([PropTypes.string, PropTypes.object]),
 * @param { Func } onClick func
 *
 */


function Button({ startElement, endElement, name,title,id,variant, color, rounded, customStyles, onClick }) {
  const isTailwind = typeof customStyles === 'string';

  return (
    <div key={color} id={id} name={name} className={`button button-${variant}-${color}  button-rounded-${rounded} ${isTailwind && customStyles} `} style={!isTailwind ? { ...customStyles } : {}} onClick={onClick}>

      {startElement}
      <div className='whitespace-nowrap'>{title}</div>
      {endElement}
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.oneOf(['black_purple','primary', 'secondary', 'tertiary','quaternary','alert']),
  // border: PropTypes.oneOf(['light', 'normal', 'bold']),
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
  id: PropTypes.string,
  rounded: PropTypes.oneOf(['none','small', 'normal', 'large']),
  startElement: PropTypes.element,
  endElement: PropTypes.element,
  customStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]), 
  onClick: PropTypes.func,
}

Button.defaultProps = {
  title: 'Button',
  name: null,
  color: 'primary',
  // border:'light',
  variant:'contained',
  id:null,
  rounded: 'normal',
  startElement: null,
  endElement: null,
  customStyles: null,
  onClick: null,
}

export default Button