import React from 'react'
import PropTypes from 'prop-types'
// import Icon from "./Icon";
import Image from 'next/image';
import ContentText from "./ContentText";

function ErrorText({ title, customStyles,onClick}) {

  const isTailwind = typeof customStyles === 'string';

    return (
        <div className={` errorTxt ${isTailwind && customStyles} `} style={!isTailwind ? { ...customStyles } : {}} onClick={onClick}>
            {/* <img className='w-[10px] h-[10px]' src="../../../public/images/error.svg" /> */}
            {/* <Image name='error'
                width="13"
                height="13"
                src="../../../public/images/error.svg" 
                customStyles='mr-[9px]'
            /> */}
            <ContentText title={title} size='small' color='alert' /> 
        </div>
    )

}

ErrorText.propTypes = {
    title: PropTypes.string,
    customStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]), 
    onClick: PropTypes.func,
}

ErrorText.defaultProps = {
    title: 'Error',
    customStyles: null,
    onClick: null,
}

export default ErrorText