import React from 'react';

const Button = ({uibutton, ButtonUi,PositionBtn,onClick,disabled}) => {
  return (
  <div>
      <div className={` flex items-center ${PositionBtn || `justify-start`}`}>
     <button onClick={onClick} className={ButtonUi} disabled={disabled}>
          {uibutton}
        </button>
    </div>
  </div>
  );
};

export default Button;
