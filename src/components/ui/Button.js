import React from 'react';

const Button = ({uibutton, ButtonUi,PositionBtn,onClick}) => {
  return (
  <div>
      <div className={`mb-4 flex items-center ${PositionBtn || `justify-start`}`}>
     <button onClick={onClick} className={ButtonUi}>
          {uibutton}
        </button>
    </div>
  </div>
  );
};

export default Button;
