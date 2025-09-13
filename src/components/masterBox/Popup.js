import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
/**
 * Primary UI component for user interaction
 */
function Popup({ children, isShow, customStyles, onClick, size ,isOverlay, isSide }) {

  const isTailwind = typeof customStyles === 'string';

  const  handleOnClick = () =>{
    if(isOverlay){
      onClick()
    }
  }

  return (
    <div className={`popup  ${isShow ? '' : 'popup-hidden'} ${isOverlay ? 'bg-black/80' : ''} `} onClick={() => handleOnClick()} >
        {
            isSide
            ?
            <div className={`popup-rightSide ${isTailwind && customStyles} `} style={!isTailwind ? { ...customStyles } : {}}>

                <Image name='closeBtn'
                    width="24"
                    height="24"
                    onClick={() => onClick()}
                    src="/images/masterBoxClose.svg" 
                    alt="masterBoxClose"
                    customStyles='popup-rightSide-icon cursor-pointer'
                />
                {children}
                
            </div>
            :
            <div className={`popup-item popup-item-${size}`} onClick={(e) => e.stopPropagation()}>
                <div className={`${isOverlay ? `popup-item-child-${size}` : ''}   ${isTailwind && customStyles} `} style={!isTailwind ? { ...customStyles } : {}}>

                    {children}

                    {
                        isOverlay
                        ?
                        <Image name='closeBtn'
                            width="24"
                            height="24"
                            onClick={() => onClick()}
                            src="/images/masterBoxClose.svg" 
                            alt="masterBoxClose"
                            customStyles='popup-item-child-icon '
                        />
                        :''
                    }
                </div>
            </div>
        }
    </div>
  );
};

Popup.propTypes = {
  children: PropTypes.any,
  size: PropTypes.oneOf(['small', 'normal', 'large', 'fit']),
  customStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
  isShow: PropTypes.bool,
  isOverlay:PropTypes.bool,
  isSide:PropTypes.bool
}

Popup.defaultProps = {
  children: null,
  size: 'normal',
  customStyles: null,
  onClick: null,
  isShow: false,
  isOverlay:true,
  isSide:false,
}

export default Popup