import React from 'react';

import './Modal.css';

export const Modal = props => {

  let {show} = props;
  const styles = {
    modal: {
      display: (show ? null : 'none')
    }
  };

  return (
    <div styleName="modal-wrapper" style={styles.modal}>
      <div styleName="modal-item">
        { props.children }
      </div>
    </div>
  )
};

Modal.propTypes = {
  show: React.PropTypes.bool,
  onClose: React.PropTypes.func
};
