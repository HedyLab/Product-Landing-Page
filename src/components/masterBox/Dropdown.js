import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ children, border, customStyles, outSideElement, justify, distance }) => {
  
  const [dropdownShow, setDropdownShow] = useState(false);
  const isTailwind = typeof customStyles === 'string';

  function handleSetDropDownUnShow(e) {
    e.stopPropagation();
    setDropdownShow(false);
  }
  useEffect(() => {
    document.addEventListener("click", (e) => setDropdownShow(false));
    return () => { window.removeEventListener('click', setDropdownShow) }
  }, [])


  useEffect(() => {
    window.addEventListener('resize',(e) => setDropdownShow(false));
    return () => { window.removeEventListener('resize', setDropdownShow) }
  }, []);


  return (
    <>
      <div
        className="dropdown"
        onClick={(e) => {
          e.stopPropagation();
          setDropdownShow(!dropdownShow)
        }}
      >
        {outSideElement}
      </div>
      <div
        className={`dropdown-item ${dropdownShow ? 'overflow-visible' : 'hidden'}`}
        // onClick={(e) => e.stopPropagation()}
        onClick={(e) => handleSetDropDownUnShow(e)}
      >
        <div className={`dropdown-item-list dropdown-item-list-${justify} dropdown-item-list-${distance} ${border ? 'border border-black_quinary  ' : ''} ${isTailwind && customStyles} `} style={!isTailwind ? { ...customStyles } : {}} >
          {children}
        </div>
      </div>
    </>
  );
};

Dropdown.propTypes = {
  justify: PropTypes.oneOf(['left', 'right', 'center']),
  distance: PropTypes.oneOf(['close', 'normal', 'far']),
  border: PropTypes.bool
}


Dropdown.defaultProps = {
  justify: 'center',
  distance: 'normal',
  border: null,
}


export default Dropdown;
