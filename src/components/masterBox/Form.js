import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import ContentText from './ContentText';



/**
 * Primary UI component for user interaction
 * 
 * @param { any } children any
 * @param { string } customStyles PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
 * @param { func } cancelBtnOnClick fun
 * @param { func } sendBtnOnClick fun
 *
 */
function Form({ children, customStyles, cancelBtnTitle,cancelBtnOnClick,sendBtnTitle, sendBtnOnClick,isSent }) {
  const isTailwind = typeof customStyles === 'string';

  return (
    <div className={`form ${isTailwind && customStyles} `} style={!isTailwind ? { ...customStyles } : {}} >
      {children}
      <div className="form-btnArea">
        <div className="form-btnArea-btnList">
          {/* <Button title={sendBtnTitle} name={sendBtnTitle} color='black_purple'  variant='contained' onClick={sendBtnOnClick} customStyles='border-radius: 20px' /> */}
          {
            isSent
            ?
            <div className='btn-success'>
              <div className='flex justify-center'>
                    已送出
              </div>
            </div>
            :
            <div className='btn-form' onClick={sendBtnOnClick}>
              <div className='flex justify-center'>
                    送出
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {
  children: PropTypes.any,
  customStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]), 
  cancelBtnOnClick: PropTypes.func,
  saveBtnOnClick: PropTypes.func,
  sendBtnTitle: PropTypes.string,
}

Form.defaultProps = {
  children: null,
  customStyles: null,
  cancelBtnOnClick: null,
  saveBtnOnClick: null,
  sendBtnTitle: '送出',
}

export default Form