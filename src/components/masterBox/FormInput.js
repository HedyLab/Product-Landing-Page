import React from 'react'
import PropTypes from 'prop-types'
import ErrorText from './ErrorText'


/**
 * Primary UI component for user interaction
 *  * 
 * @param { String } title oneOf_'text', 'contained', 'outlined'
 * @param { String } color oneOf_'primary', 'secondary', 'tertiary','quaternary'
 * @param { String } variant oneOf_'text', 'contained', 'outlined'
 * @param { Element,String } customStyles oneOfType([PropTypes.string, PropTypes.object]),
 * @param { Func } onClick func
 * @param { Func } onChange func
 */


function FormInput({ title,inputId,inputType,labelId,labelTitle, color ,variant, customStyles, onClick,onChange,errorText}) {

    const isTailwind = typeof customStyles === 'string';

    return (
        <div className='formInput'>
            <input type={inputType} name={inputId} autoComplete="off" onChange={onChange} />

            <label for={labelId} className="label-name">
                <span className="content-name">
                    {labelTitle}
                </span>
            </label>
            {errorText ? <ErrorText customStyles='mt-[8px] pl-[1px]' title={errorText} /> : ''}
        </div>
    )

}

FormInput.propTypes = {
    inputId: PropTypes.string,
    inputType:PropTypes.oneOf(['text','search','url','tel','email','password']),

    labelId: PropTypes.string,
    labelTitle: PropTypes.string,
    onChange: PropTypes.func,
    
    // title: PropTypes.string,
    // color: PropTypes.oneOf(['text','search','url','tel','email','password']),
    // border: PropTypes.oneOf(['light', 'normal', 'bold']),
    // variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
    // customStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]), 
    // onClick: PropTypes.func,
}

FormInput.defaultProps = {
    inputId:'input',
    inputType:'text',
    labelTitle: 'label',
    labelId:'text',
    onChange: null,


    // color: 'primary',
    // border:'light',
    // variant:'contained',
    // customStyles: null,
    // onClick: null,
}

export default FormInput
