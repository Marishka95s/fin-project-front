import { useState } from 'react';
import './Dropdown.scss';
export default function Dropdown({ selected, setSelected, options }) {
  const [isActive, setIsActive] = useState(false);
  //   const handleClickOutside = e => {
  //     console.log('outside click isActive', isActive, '  e:', e.target.className);
  //     if (
  //       e.target.className === 'dropdown-item' &&
  //       e.target.className === 'dropdown-btn'
  //     ) {
  //       return;
  //     }
  //     setIsActive(false);  // "../../../images/icons/arrow-down.svg"
  //   };

  const handleClick = () => {
    //document.addEventListener('click', handleClickOutside);
    //console.log('listener outside added');
    setIsActive(!isActive);
  };

  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        onClick={e => {
          handleClick();
          //console.log('btn click isActive', isActive);
        }}
      >
        {selected}
        <span className="arrow-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map(option => (
            <div
              key={option}
              onClick={e => {
                setSelected(option);
                setIsActive(false);
                //console.log('option click isActive', isActive);
              }}
              onBlur={e => {
                setIsActive(false);
                //console.log('onBlur', isActive);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}